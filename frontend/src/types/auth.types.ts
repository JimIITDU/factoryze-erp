export interface LoginPayload {
  loginId: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  role: 'manufacturer' | 'supplier' | 'distributor';
  id: string;
}

export interface AuthUser {
  token: string;
  role: 'manufacturer' | 'supplier' | 'distributor';
  id: string;
}