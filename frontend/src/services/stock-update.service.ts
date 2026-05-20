import api from './api';
import { CreateStockUpdatePayload, StockUpdate } from '@/types/stock-update.types';

export const stockUpdateService = {
  create: async (payload: CreateStockUpdatePayload): Promise<StockUpdate> => {
    const res = await api.post('/stock-updates', payload);
    return res.data.data;
  },
  getAll: async (): Promise<StockUpdate[]> => {
    const res = await api.get('/stock-updates');
    return res.data.data;
  },
  getMyUpdates: async (): Promise<StockUpdate[]> => {
    const res = await api.get('/stock-updates/my-updates');
    return res.data.data;
  },
};