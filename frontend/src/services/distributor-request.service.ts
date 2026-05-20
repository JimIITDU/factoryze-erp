import api from './api';
import { CreateDistributorRequestPayload, DistributorRequest } from '@/types/distributor-request.types';

export const distributorRequestService = {
  create: async (payload: CreateDistributorRequestPayload): Promise<DistributorRequest> => {
    const res = await api.post('/distributor-requests', payload);
    return res.data.data;
  },
  getAllForManufacturer: async (): Promise<DistributorRequest[]> => {
    const res = await api.get('/distributor-requests');
    return res.data.data;
  },
  getMyRequests: async (): Promise<DistributorRequest[]> => {
    const res = await api.get('/distributor-requests/my-requests');
    return res.data.data;
  },
  updateStatus: async (id: string, status: string, note?: string): Promise<DistributorRequest> => {
    const res = await api.patch(`/distributor-requests/${id}/status`, { status, note });
    return res.data.data;
  },
};