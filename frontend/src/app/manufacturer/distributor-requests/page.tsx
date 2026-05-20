'use client';

import { useDistributorRequests } from '@/hooks/useDistributorRequests';
import { distributorRequestService } from '@/services/distributor-request.service';
import PageWrapper from '@/components/layout/PageWrapper';
import Badge from '@/components/ui/Badge';

export default function DistributorRequestsPage() {
  const { requests, loading, refetch } = useDistributorRequests('manufacturer');

  const handle = async (id: string, status: string) => {
    await distributorRequestService.updateStatus(id, status);
    refetch();
  };

  return (
    <PageWrapper title="Distributor Requests">
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">Distributor</th>
              <th className="px-6 py-3 text-left">Items</th>
              <th className="px-6 py-3 text-left">Preferred Date</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr><td colSpan={5} className="px-6 py-4 text-gray-400">Loading...</td></tr>
            ) : requests.length === 0 ? (
              <tr><td colSpan={5} className="px-6 py-4 text-gray-400">No requests yet</td></tr>
            ) : (
              requests.map((r) => (
                <tr key={r._id}>
                  <td className="px-6 py-4 font-medium">{typeof r.distributorId === 'object' ? r.distributorId.name : r.distributorId}</td>
                  <td className="px-6 py-4 text-gray-500">{r.items.map(i => `${i.productName} x${i.quantity}`).join(', ')}</td>
                  <td className="px-6 py-4 text-gray-500">{r.preferredDeliveryDate ? new Date(r.preferredDeliveryDate).toLocaleDateString() : '—'}</td>
                  <td className="px-6 py-4"><Badge status={r.status} /></td>
                  <td className="px-6 py-4 space-x-2">
                    {r.status === 'pending' && (
                      <>
                        <button onClick={() => handle(r._id, 'approved')} className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Approve</button>
                        <button onClick={() => handle(r._id, 'rejected')} className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full">Reject</button>
                      </>
                    )}
                    {r.status === 'approved' && (
                      <button onClick={() => handle(r._id, 'delivered')} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Mark Delivered</button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
}