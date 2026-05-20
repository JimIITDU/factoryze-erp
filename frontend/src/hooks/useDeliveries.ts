import { useEffect, useState } from 'react';
import { deliveryService } from '@/services/delivery.service';
import { Delivery } from '@/types/delivery.types';

export function useDeliveries() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = () =>
    deliveryService.getAll()
      .then(setDeliveries)
      .finally(() => setLoading(false));

  useEffect(() => { fetch(); }, []);
  return { deliveries, loading, refetch: fetch };
}