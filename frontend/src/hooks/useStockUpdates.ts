import { useEffect, useState } from 'react';
import { stockUpdateService } from '@/services/stock-update.service';
import { StockUpdate } from '@/types/stock-update.types';

export function useStockUpdates() {
  const [updates, setUpdates] = useState<StockUpdate[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = () =>
    stockUpdateService.getAll()
      .then(setUpdates)
      .finally(() => setLoading(false));

  useEffect(() => { fetch(); }, []);
  return { updates, loading, refetch: fetch };
}