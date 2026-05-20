'use client';

import { useEffect, useState } from 'react';
import api from '@/services/api';
import PageWrapper from '@/components/layout/PageWrapper';
import Card from '@/components/ui/Card';

export default function ManufacturerDashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    api.get('/dashboard').then((res) => setData(res.data.data));
  }, []);

  if (!data) return <div className="p-8 text-gray-500">Loading dashboard...</div>;

  return (
    <PageWrapper title="Dashboard">
      <div className="grid grid-cols-2 gap-6 mb-8">
        <Card title="Total Suppliers" value={data.totalSuppliers} icon="🏭" />
        <Card title="Total Distributors" value={data.totalDistributors} icon="🚚" />
        <Card title="Pending Purchase Orders" value={data.pendingPurchaseOrders} icon="📦" />
        <Card title="Pending Distributor Requests" value={data.pendingDistributorRequests} icon="📋" />
      </div>
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="font-semibold text-gray-700 mb-4">Recent Deliveries</h2>
        {data.recentDeliveries.length === 0 ? (
          <p className="text-gray-400 text-sm">No deliveries yet</p>
        ) : (
          data.recentDeliveries.map((d: any) => (
            <div key={d._id} className="text-sm text-gray-600 py-2 border-b last:border-0">
              To: {d.distributorId?.name ?? 'Unknown'} — {new Date(d.deliveryDate).toLocaleDateString()}
            </div>
          ))
        )}
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold text-gray-700 mb-4">Recent Stock Updates</h2>
        {data.recentStockUpdates.length === 0 ? (
          <p className="text-gray-400 text-sm">No stock updates yet</p>
        ) : (
          data.recentStockUpdates.map((s: any) => (
            <div key={s._id} className="text-sm text-gray-600 py-2 border-b last:border-0">
              {s.distributorId?.name ?? 'Unknown'} — {s.productName}: {s.reportedQty} units
              {s.isLowStockAlert && <span className="ml-2 text-red-500 font-semibold">⚠ Low Stock</span>}
            </div>
          ))
        )}
      </div>
    </PageWrapper>
  );
}