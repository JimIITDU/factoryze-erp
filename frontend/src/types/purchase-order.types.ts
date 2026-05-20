export interface OrderItem {
  rawMaterialId: string;
  name: string;
  quantity: number;
  unit: string;
}

export interface PurchaseOrder {
  _id: string;
  supplierId: { _id: string; name: string; loginId: string } | string;
  items: OrderItem[];
  requiredDeliveryDate: string;
  status: string;
  note?: string;
  createdAt: string;
}

export interface CreatePurchaseOrderPayload {
  supplierId: string;
  items: OrderItem[];
  requiredDeliveryDate: string;
}