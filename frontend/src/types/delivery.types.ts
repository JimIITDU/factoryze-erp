export interface DeliveryItem {
  productId: string;
  productName: string;
  quantityDelivered: number;
}

export interface Delivery {
  _id: string;
  requestId: string;
  distributorId: { _id: string; name: string } | string;
  items: DeliveryItem[];
  deliveryDate: string;
  receiptConfirmedDate?: string;
  createdAt: string;
}

export interface CreateDeliveryPayload {
  requestId: string;
  distributorId: string;
  items: DeliveryItem[];
  deliveryDate: string;
}