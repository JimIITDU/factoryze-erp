import api from './api';
import { LoginPayload, AuthResponse } from '@/types/auth.types';

export const authService = {
  login: async (payload: LoginPayload): Promise<AuthResponse> => {
    const res = await api.post('/auth/login', payload);
    return res.data.data;
  },
};