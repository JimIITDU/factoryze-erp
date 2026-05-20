export interface Distributor {
  _id: string;
  name: string;
  loginId: string;
  status: string;
  manufacturerId: string;
  createdAt: string;
}

export interface CreateDistributorPayload {
  name: string;
  loginId: string;
  password: string;
}