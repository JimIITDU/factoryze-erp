import { useEffect, useState } from 'react';
import { distributorRequestService } from '@/services/distributor-request.service';
import { DistributorRequest } from '@/types/distributor-request.types';

export function useDistributorRequests(role: 'manufacturer' | 'distributor') {
  const [requests, setRequests] = useState<DistributorRequest[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = () => {
    const fn = role === 'manufacturer'
      ? distributorRequestService.getAllForManufacturer
      : distributorRequestService.getMyRequests;
    return fn().then(setRequests).finally(() => setLoading(false));
  };

  useEffect(() => { fetch(); }, []);
  return { requests, loading, refetch: fetch };
}