export interface Supplier {
  _id: string;
  name: string;
  loginId: string;
  status: string;
  manufacturerId: string;
  createdAt: string;
}

export interface CreateSupplierPayload {
  name: string;
  loginId: string;
  password: string;
}
