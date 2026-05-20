import api from './api';
import { CreatePurchaseOrderPayload, PurchaseOrder } from '@/types/purchase-order.types';

export const purchaseOrderService = {
  create: async (payload: CreatePurchaseOrderPayload): Promise<PurchaseOrder> => {
    const res = await api.post('/purchase-orders', payload);
    return res.data.data;
  },
  getAllForManufacturer: async (): Promise<PurchaseOrder[]> => {
    const res = await api.get('/purchase-orders');
    return res.data.data;
  },
  getMyOrders: async (): Promise<PurchaseOrder[]> => {
    const res = await api.get('/purchase-orders/my-orders');
    return res.data.data;
  },
  updateStatus: async (id: string, status: string, note?: string): Promise<PurchaseOrder> => {
    const res = await api.patch(`/purchase-orders/${id}/status`, { status, note });
    return res.data.data;
  },
  markDelivered: async (id: string): Promise<PurchaseOrder> => {
    const res = await api.patch(`/purchase-orders/${id}/deliver`);
    return res.data.data;
  },
};