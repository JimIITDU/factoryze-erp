import api from './api';
import { CreateDistributorPayload, Distributor } from '@/types/distributor.types';

export const distributorService = {
  create: async (payload: CreateDistributorPayload): Promise<Distributor> => {
    const res = await api.post('/distributors', payload);
    return res.data.data;
  },
  getAll: async (): Promise<Distributor[]> => {
    const res = await api.get('/distributors');
    return res.data.data;
  },
};