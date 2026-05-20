'use client';

import { useEffect, useState } from 'react';
import { deliveryService } from '@/services/delivery.service';
import { Delivery } from '@/types/delivery.types';
import PageWrapper from '@/components/layout/PageWrapper';

export default function DeliveriesPage() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    deliveryService.getAll().then(setDeliveries).finally(() => setLoading(false));
  }, []);

  return (
    <PageWrapper title="Deliveries">
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">Distributor</th>
              <th className="px-6 py-3 text-left">Items</th>
              <th className="px-6 py-3 text-left">Delivery Date</th>
              <th className="px-6 py-3 text-left">Receipt Confirmed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr><td colSpan={4} className="px-6 py-4 text-gray-400">Loading...</td></tr>
            ) : deliveries.length === 0 ? (
              <tr><td colSpan={4} className="px-6 py-4 text-gray-400">No deliveries yet</td></tr>
            ) : (
              deliveries.map((d) => (
                <tr key={d._id}>
                  <td className="px-6 py-4 font-medium">{typeof d.distributorId === 'object' ? d.distributorId.name : d.distributorId}</td>
                  <td className="px-6 py-4 text-gray-500">{d.items.map(i => `${i.productName} x${i.quantityDelivered}`).join(', ')}</td>
                  <td className="px-6 py-4">{new Date(d.deliveryDate).toLocaleDateString()}</td>
                  <td className="px-6 py-4">{d.receiptConfirmedDate ? new Date(d.receiptConfirmedDate).toLocaleDateString() : '—'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
}