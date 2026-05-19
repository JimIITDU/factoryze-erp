import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PurchaseOrder } from '../purchase-order/purchase-order.schema';
import { DistributorRequest } from '../distributor-request/distributor-request.schema';
import { Delivery } from '../delivery/delivery.schema';
import { StockUpdate } from '../stock-update/stock-update.schema';
import { Supplier } from '../supplier/supplier.schema';
import { Distributor } from '../distributor/distributor.schema';

@Injectable()
export class DashboardService {
  constructor(
    @InjectModel(PurchaseOrder.name) private purchaseOrderModel: Model<PurchaseOrder>,
    @InjectModel(DistributorRequest.name) private distRequestModel: Model<DistributorRequest>,
    @InjectModel(Delivery.name) private deliveryModel: Model<Delivery>,
    @InjectModel(StockUpdate.name) private stockUpdateModel: Model<StockUpdate>,
    @InjectModel(Supplier.name) private supplierModel: Model<Supplier>,
    @InjectModel(Distributor.name) private distributorModel: Model<Distributor>,
  ) {}

  async getManufacturerDashboard(manufacturerId: string) {
    const [
      totalSuppliers,
      totalDistributors,
      pendingPurchaseOrders,
      pendingDistributorRequests,
      recentDeliveries,
      recentStockUpdates,
    ] = await Promise.all([
      this.supplierModel.countDocuments({ manufacturerId }),
      this.distributorModel.countDocuments({ manufacturerId }),
      this.purchaseOrderModel.countDocuments({ manufacturerId, status: 'requested' }),
      this.distRequestModel.countDocuments({ manufacturerId, status: 'pending' }),
      this.deliveryModel.find({ }).sort({ createdAt: -1 }).limit(5).populate('distributorId', 'name'),
      this.stockUpdateModel.find({ }).sort({ createdAt: -1 }).limit(5).populate('distributorId', 'name'),
    ]);

    return {
      totalSuppliers,
      totalDistributors,
      pendingPurchaseOrders,
      pendingDistributorRequests,
      recentDeliveries,
      recentStockUpdates,
    };
  }
}