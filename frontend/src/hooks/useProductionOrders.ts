import { useEffect, useState } from 'react';
import { productionOrderService } from '@/services/production-order.service';
import { ProductionOrder } from '@/types/production-order.types';

export function useProductionOrders() {
  const [orders, setOrders] = useState<ProductionOrder[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = () =>
    productionOrderService.getAll()
      .then(setOrders)
      .finally(() => setLoading(false));

  useEffect(() => { fetch(); }, []);
  return { orders, loading, refetch: fetch };
}