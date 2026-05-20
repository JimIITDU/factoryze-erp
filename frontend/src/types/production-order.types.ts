export interface ProductionOrder {
  _id: string;
  productId: string;
  productName: string;
  quantity: number;
  status: string;
  createdAt: string;
}

export interface CreateProductionOrderPayload {
  productId: string;
  productName: string;
  quantity: number;
}