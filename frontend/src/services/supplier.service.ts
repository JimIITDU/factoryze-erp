import api from './api';
import { CreateSupplierPayload, Supplier } from '@/types/supplier.types';

export const supplierService = {
  create: async (payload: CreateSupplierPayload): Promise<Supplier> => {
    const res = await api.post('/suppliers', payload);
    return res.data.data ?? res.data;
  },

  getAll: async (): Promise<Supplier[]> => {
    const res = await api.get('/suppliers');
    return res.data.data ?? res.data;
  },
};