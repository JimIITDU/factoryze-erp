import api from './api';
import { CreateDeliveryPayload, Delivery } from '@/types/delivery.types';

export const deliveryService = {
  create: async (payload: CreateDeliveryPayload): Promise<Delivery> => {
    const res = await api.post('/deliveries', payload);
    return res.data.data;
  },
  getAll: async (): Promise<Delivery[]> => {
    const res = await api.get('/deliveries');
    return res.data.data;
  },
  getMyDeliveries: async (): Promise<Delivery[]> => {
    const res = await api.get('/deliveries/my-deliveries');
    return res.data.data;
  },
  confirmReceipt: async (id: string): Promise<Delivery> => {
    const res = await api.patch(`/deliveries/${id}/confirm`);
    return res.data.data;
  },
};