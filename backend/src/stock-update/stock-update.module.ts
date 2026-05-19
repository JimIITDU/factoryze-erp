import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StockUpdateService } from './stock-update.service';
import { StockUpdateController } from './stock-update.controller';
import { StockUpdate, StockUpdateSchema } from './stock-update.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StockUpdate.name, schema: StockUpdateSchema },
    ]),
  ],
  controllers: [StockUpdateController],
  providers: [StockUpdateService],
  exports: [StockUpdateService],
})
export class StockUpdateModule {}