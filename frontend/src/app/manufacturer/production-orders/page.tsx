'use client';

import { useEffect, useState } from 'react';
import { productionOrderService } from '@/services/production-order.service';
import { ProductionOrder } from '@/types/production-order.types';
import PageWrapper from '@/components/layout/PageWrapper';
import Badge from '@/components/ui/Badge';

export default function ProductionOrdersPage() {
  const [orders, setOrders] = useState<ProductionOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ productId: '', productName: '', quantity: 1 });

  const fetch = () =>
    productionOrderService.getAll()
      .then((data) => setOrders(Array.isArray(data) ? data : []))
      .catch(() => setOrders([]))
      .finally(() => setLoading(false));
  useEffect(() => { fetch(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await productionOrderService.create(form);
    setShowForm(false);
    fetch();
  };

  const handleStatus = async (id: string, status: string) => {
    await productionOrderService.updateStatus(id, status);
    fetch();
  };

  return (
    <PageWrapper
      title="Production Orders"
      action={
        <button onClick={() => setShowForm(!showForm)} className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700">
          + New Production Order
        </button>
      }
    >
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 mb-6 space-y-4">
          <h2 className="font-semibold text-gray-700">Create Production Order</h2>
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Product Name" value={form.productName} onChange={(e) => setForm({ ...form, productName: e.target.value })} required />
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Product ID (optional)" value={form.productId} onChange={(e) => setForm({ ...form, productId: e.target.value })} />
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Quantity" type="number" min={1} value={form.quantity} onChange={(e) => setForm({ ...form, quantity: Number(e.target.value) })} required />
          <div className="flex gap-3">
            <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700">Create</button>
            <button type="button" onClick={() => setShowForm(false)} className="text-gray-500 px-4 py-2 text-sm">Cancel</button>
          </div>
        </form>
      )}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">Product</th>
              <th className="px-6 py-3 text-left">Quantity</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr><td colSpan={4} className="px-6 py-4 text-gray-400">Loading...</td></tr>
            ) : orders.length === 0 ? (
              <tr><td colSpan={4} className="px-6 py-4 text-gray-400">No production orders yet</td></tr>
            ) : (
              orders.map((o) => (
                <tr key={o._id}>
                  <td className="px-6 py-4 font-medium">{o.productName}</td>
                  <td className="px-6 py-4">{o.quantity}</td>
                  <td className="px-6 py-4"><Badge status={o.status} /></td>
                  <td className="px-6 py-4 space-x-2">
                    {o.status === 'requested' && (
                      <button onClick={() => handleStatus(o._id, 'in_progress')} className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">Start</button>
                    )}
                    {o.status === 'in_progress' && (
                      <button onClick={() => handleStatus(o._id, 'completed')} className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Complete</button>
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