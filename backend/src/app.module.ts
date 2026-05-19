import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { SupplierModule } from './supplier/supplier.module';
import { DistributorModule } from './distributor/distributor.module';
import { RawMaterialModule } from './raw-material/raw-material.module';
import { FinishedProductModule } from './finished-product/finished-product.module';
import { PurchaseOrderModule } from './purchase-order/purchase-order.module';
import { ProductionOrderModule } from './production-order/production-order.module';
import { DistributorRequestModule } from './distributor-request/distributor-request.module';
import { DeliveryModule } from './delivery/delivery.module';
import { StockUpdateModule } from './stock-update/stock-update.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI as string),
    AuthModule,
    ManufacturerModule,
    SupplierModule,
    DistributorModule,
    RawMaterialModule,
    FinishedProductModule,
    PurchaseOrderModule,
    ProductionOrderModule,
    DistributorRequestModule,
    DeliveryModule,
    StockUpdateModule,
    DashboardModule,
  ],
})
export class AppModule {}