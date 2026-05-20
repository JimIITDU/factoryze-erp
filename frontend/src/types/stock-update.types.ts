export interface StockUpdate {
  _id: string;
  distributorId: { _id: string; name: string } | string;
  productId: string;
  productName: string;
  reportedQty: number;
  isLowStockAlert: boolean;
  createdAt: string;
}

export interface CreateStockUpdatePayload {
  productId: string;
  productName: string;
  reportedQty: number;
  isLowStockAlert?: boolean;
}