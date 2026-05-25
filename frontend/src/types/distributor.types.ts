export interface Distributor {
  _id: string;

  name: string;
  loginId: string;

  companyName: string;
  email: string;
  phone: string;
  address: string;

  status: 'active' | 'inactive' | 'pending';

  manufacturerId: string;

  createdAt: string;
  updatedAt?: string;
}

export interface CreateDistributorPayload {
  name: string;
  loginId: string;
  password: string;

  companyName: string;
  email: string;
  phone: string;
  address: string;
}