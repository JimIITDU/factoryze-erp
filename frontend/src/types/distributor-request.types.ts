export interface RequestItem {
  productId: string;
  productName: string;
  quantity: number;
}

export interface DistributorRequest {
  _id: string;
  distributorId: { _id: string; name: string } | string;
  items: RequestItem[];
  preferredDeliveryDate?: string;
  status: string;
  note?: string;
  createdAt: string;
}

export interface CreateDistributorRequestPayload {
  items: RequestItem[];
  preferredDeliveryDate?: string;
}