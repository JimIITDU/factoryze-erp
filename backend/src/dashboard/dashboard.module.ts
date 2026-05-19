import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { PurchaseOrder, PurchaseOrderSchema } from '../purchase-order/purchase-order.schema';
import { DistributorRequest, DistributorRequestSchema } from '../distributor-request/distributor-request.schema';
import { Delivery, DeliverySchema } from '../delivery/delivery.schema';
import { StockUpdate, StockUpdateSchema } from '../stock-update/stock-update.schema';
import { Supplier, SupplierSchema } from '../supplier/supplier.schema';
import { Distributor, DistributorSchema } from '../distributor/distributor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PurchaseOrder.name, schema: PurchaseOrderSchema },
      { name: DistributorRequest.name, schema: DistributorRequestSchema },
      { name: Delivery.name, schema: DeliverySchema },
      { name: StockUpdate.name, schema: StockUpdateSchema },
      { name: Supplier.name, schema: SupplierSchema },
      { name: Distributor.name, schema: DistributorSchema },
    ]),
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}