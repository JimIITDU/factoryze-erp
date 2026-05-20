import { useEffect, useState } from 'react';
import { purchaseOrderService } from '@/services/purchase-order.service';
import { PurchaseOrder } from '@/types/purchase-order.types';

export function usePurchaseOrders(role: 'manufacturer' | 'supplier') {
  const [orders, setOrders] = useState<PurchaseOrder[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = () => {
    const fn = role === 'manufacturer'
      ? purchaseOrderService.getAllForManufacturer
      : purchaseOrderService.getMyOrders;
    return fn().then(setOrders).finally(() => setLoading(false));
  };

  useEffect(() => { fetch(); }, []);
  return { orders, loading, refetch: fetch };
}