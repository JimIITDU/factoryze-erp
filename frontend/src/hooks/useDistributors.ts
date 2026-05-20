import { useEffect, useState } from 'react';
import { distributorService } from '@/services/distributor.service';
import { Distributor } from '@/types/distributor.types';

export function useDistributors() {
  const [distributors, setDistributors] = useState<Distributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    distributorService.getAll()
      .then(setDistributors)
      .catch(() => setError('Failed to load distributors'))
      .finally(() => setLoading(false));
  }, []);

  return { distributors, loading, error, refetch: () => distributorService.getAll().then(setDistributors) };
}