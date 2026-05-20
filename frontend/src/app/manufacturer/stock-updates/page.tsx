'use client';

import { useEffect, useState } from 'react';
import { stockUpdateService } from '@/services/stock-update.service';
import { StockUpdate } from '@/types/stock-update.types';
import PageWrapper from '@/components/layout/PageWrapper';

export default function StockUpdatesPage() {
  const [updates, setUpdates] = useState<StockUpdate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    stockUpdateService.getAll().then(setUpdates).finally(() => setLoading(false));
  }, []);

  return (
    <PageWrapper title="Stock Updates from Distributors">
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">Distributor</th>
              <th className="px-6 py-3 text-left">Product</th>
              <th className="px-6 py-3 text-left">Qty</th>
              <th className="px-6 py-3 text-left">Alert</th>
              <th className="px-6 py-3 text-left">Reported At</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr><td colSpan={5} className="px-6 py-4 text-gray-400">Loading...</td></tr>
            ) : updates.length === 0 ? (
              <tr><td colSpan={5} className="px-6 py-4 text-gray-400">No stock updates yet</td></tr>
            ) : (
              updates.map((u) => (
                <tr key={u._id}>
                  <td className="px-6 py-4 font-medium">{typeof u.distributorId === 'object' ? u.distributorId.name : u.distributorId}</td>
                  <td className="px-6 py-4">{u.productName}</td>
                  <td className="px-6 py-4">{u.reportedQty}</td>
                  <td className="px-6 py-4">{u.isLowStockAlert ? <span className="text-red-500 font-semibold">⚠ Low Stock</span> : <span className="text-green-500">OK</span>}</td>
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