import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FinishedProductService } from './finished-product.service';
import { FinishedProductController } from './finished-product.controller';
import { FinishedProduct, FinishedProductSchema } from './finished-product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FinishedProduct.name, schema: FinishedProductSchema },
    ]),
  ],
  controllers: [FinishedProductController],
  providers: [FinishedProductService],
  exports: [FinishedProductService],
})
export class FinishedProductModule {}