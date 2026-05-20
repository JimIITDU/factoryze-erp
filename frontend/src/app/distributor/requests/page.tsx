'use client';

import { useState } from 'react';
import { useDistributorRequests } from '@/hooks/useDistributorRequests';
import { distributorRequestService } from '@/services/distributor-request.service';
import PageWrapper from '@/components/layout/PageWrapper';
import Badge from '@/components/ui/Badge';
import { deliveryService } from '@/services/delivery.service';

export default function DistributorRequestsPage() {
  const { requests, loading, refetch } = useDistributorRequests('distributor');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ preferredDeliveryDate: '', items: [{ productId: '', productName: '', quantity: 1 }] });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await distributorRequestService.create(form);
    setShowForm(false);
    refetch();
  };

  const addItem = () => setForm({ ...form, items: [...form.items, { productId: '', productName: '', quantity: 1 }] });

  const handleConfirm = async (requestId: string, distributorId: string, items: any[]) => {
    await deliveryService.confirmReceipt(requestId);
    refetch();
  };

  return (
    <PageWrapper
      title="My Requests"
      action={
        <button onClick={() => setShowForm(!showForm)} className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700">
          + New Request
        </button>
      }
    >
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 mb-6 space-y-4">
          <h2 className="font-semibold text-gray-700">Place Product Request</h2>
          <input type="date" className="w-full border rounded-lg px-4 py-2" value={form.preferredDeliveryDate} onChange={(e) => setForm({ ...form, preferredDeliveryDate: e.target.value })} />
          <div className="space-y-2">
            {form.items.map((item, i) => (
              <div key={i} className="grid grid-cols-3 gap-2">
                <input className="border rounded px-3 py-2 text-sm" placeholder="Product name" value={item.productName} onChange={(e) => { const items = [...form.items]; items[i].productName = e.target.value; setForm({ ...form, items }); }} required />
                <input className="border rounded px-3 py-2 text-sm" placeholder="Quantity" type="number" min={1} value={item.quantity} onChange={(e) => { const items = [...form.items]; items[i].quantity = Number(e.target.value); setForm({ ...form, items }); }} required />
                <input className="border rounded px-3 py-2 text-sm" placeholder="Product ID (optional)" value={item.productId} onChange={(e) => { const items = [...form.items]; items[i].productId = e.target.value; setForm({ ...form, items }); }} />
              </div>
            ))}
            <button type="button" onClick={addItem} className="text-indigo-600 text-sm">+ Add Item</button>
          </div>
          <div className="flex gap-3">
            <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700">Submit</button>
            <button type="button" onClick={() => setShowForm(false)} className="text-gray-500 px-4 py-2 text-sm">Cancel</button>
          </div>
        </form>
      )}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">Items</th>
              <th className="px-6 py-3 text-left">Preferred Date</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr><td colSpan={4} className="px-6 py-4 text-gray-400">Loading...</td></tr>
            ) : requests.length === 0 ? (
              <tr><td colSpan={4} className="px-6 py-4 text-gray-400">No requests yet</td></tr>
            ) : (
              requests.map((r) => (
                <tr key={r._id}>
                  <td className="px-6 py-4">{r.items.map(i => `${i.productName} x${i.quantity}`).join(', ')}</td>
                  <td className="px-6 py-4 text-gray-500">{r.preferredDeliveryDate ? new Date(r.preferredDeliveryDate).toLocaleDateString() : '—'}</td>
                  <td className="px-6 py-4"><Badge status={r.status} /></td>
                  <td className="px-6 py-4">
                    {r.status === 'delivered' && (
                      <button onClick={() => handleConfirm(r._id, '', r.items)} className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Confirm Receipt</button>
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