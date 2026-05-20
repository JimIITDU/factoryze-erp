'use client';

import { useEffect, useState } from 'react';
import { stockUpdateService } from '@/services/stock-update.service';
import { StockUpdate } from '@/types/stock-update.types';
import PageWrapper from '@/components/layout/PageWrapper';

export default function DistributorStockUpdatesPage() {
  const [updates, setUpdates] = useState<StockUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ productId: '', productName: '', reportedQty: 0, isLowStockAlert: false });

  const fetch = () => stockUpdateService.getMyUpdates().then(setUpdates).finally(() => setLoading(false));
  useEffect(() => { fetch(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await stockUpdateService.create(form);
    setShowForm(false);
    fetch();
  };

  return (
    <PageWrapper
      title="Stock Updates"
      action={
        <button onClick={() => setShowForm(!showForm)} className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700">
          + Send Update
        </button>
      }
    >
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 mb-6 space-y-4">
          <h2 className="font-semibold text-gray-700">Send Stock Update</h2>
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Product Name" value={form.productName} onChange={(e) => setForm({ ...form, productName: e.target.value })} required />
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Product ID (optional)" value={form.productId} onChange={(e) => setForm({ ...form, productId: e.target.value })} />
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Current Stock Quantity" type="number" min={0} value={form.reportedQty} onChange={(e) => setForm({ ...form, reportedQty: Number(e.target.value) })} required />
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" checked={form.isLowStockAlert} onChange={(e) => setForm({ ...form, isLowStockAlert: e.target.checked })} />
            Mark as Low Stock Alert
          </label>
          <div className="flex gap-3">
            <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700">Send</button>
            <button type="button" onClick={() => setShowForm(false)} className="text-gray-500 px-4 py-2 text-sm">Cancel</button>
          </div>
        </form>
      )}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">Product</th>
              <th className="px-6 py-3 text-left">Qty</th>
              <th className="px-6 py-3 text-left">Alert</th>
              <th className="px-6 py-3 text-left">Reported At</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr><td colSpan={4} className="px-6 py-4 text-gray-400">Loading...</td></tr>
            ) : updates.length === 0 ? (
              <tr><td colSpan={4} className="px-6 py-4 text-gray-400">No updates sent yet</td></tr>
            ) : (
              updates.map((u) => (
                <tr key={u._id}>
                  <td className="px-6 py-4 font-medium">{u.productName}</td>
                  <td className="px-6 py-4">{u.reportedQty}</td>
                  <td className="px-6 py-4">{u.isLowStockAlert ? <span className="text-red-500 font-semibold">⚠ Low</span> : <span className="text-green-500">OK</span>}</td>
                  <td className="px-6 py-4 text-gray-500">{new Date(u.createdAt).toLocaleDateString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
}