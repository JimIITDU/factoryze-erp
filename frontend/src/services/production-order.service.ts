import api from './api';
import { CreateProductionOrderPayload, ProductionOrder } from '@/types/production-order.types';

export const productionOrderService = {
  create: async (payload: CreateProductionOrderPayload): Promise<ProductionOrder> => {
    const res = await api.post('/production-orders', payload);
    return res.data.data;
  },
  getAll: async (): Promise<ProductionOrder[]> => {
    const res = await api.get('/production-orders');
    return res.data.data;
  },
  updateStatus: async (id: string, status: string): Promise<ProductionOrder> => {
    const res = await api.patch(`/production-orders/${id}/status`, { status });
    return res.data.data;
  },
};