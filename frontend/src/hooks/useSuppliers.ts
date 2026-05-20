import { useEffect, useState } from 'react';
import { supplierService } from '@/services/supplier.service';
import { Supplier } from '@/types/supplier.types';

export function useSuppliers() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    supplierService.getAll()
      .then(setSuppliers)
      .catch(() => setError('Failed to load suppliers'))
      .finally(() => setLoading(false));
  }, []);

  return { suppliers, loading, error, refetch: () => supplierService.getAll().then(setSuppliers) };
}