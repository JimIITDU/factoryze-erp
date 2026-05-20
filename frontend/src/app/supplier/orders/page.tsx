'use client';

import { usePurchaseOrders } from '@/hooks/usePurchaseOrders';
import { purchaseOrderService } from '@/services/purchase-order.service';
import PageWrapper from '@/components/layout/PageWrapper';
import Badge from '@/components/ui/Badge';

export default function SupplierOrdersPage() {
  const { orders, loading, refetch } = usePurchaseOrders('supplier');

  const handle = async (id: string, status: string) => {
    await purchaseOrderService.updateStatus(id, status);
    refetch();
  };

  const handleDeliver = async (id: string) => {
    await purchaseOrderService.markDelivered(id);
    refetch();
  };

  return (
    <PageWrapper title="My Purchase Orders">
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">Items</th>
              <th className="px-6 py-3 text-left">Required By</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr><td colSpan={4} className="px-6 py-4 text-gray-400">Loading...</td></tr>
            ) : orders.length === 0 ? (
              <tr><td colSpan={4} className="px-6 py-4 text-gray-400">No orders assigned yet</td></tr>
            ) : (
              orders.map((o) => (
                <tr key={o._id}>
                  <td className="px-6 py-4">{o.items.map(i => `${i.name} x${i.quantity} ${i.unit}`).join(', ')}</td>
                  <td className="px-6 py-4 text-gray-500">{new Date(o.requiredDeliveryDate).toLocaleDateString()}</td>
                  <td className="px-6 py-4"><Badge status={o.status} /></td>
                  <td className="px-6 py-4 space-x-2">
                    {o.status === 'requested' && (
                      <>
                        <button onClick={() => handle(o._id, 'accepted')} className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Accept</button>
                        <button onClick={() => handle(o._id, 'rejected')} className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full">Reject</button>
                      </>
                    )}
                    {o.status === 'accepted' && (
                      <button onClick={() => handleDeliver(o._id)} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Mark Delivered</button>
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