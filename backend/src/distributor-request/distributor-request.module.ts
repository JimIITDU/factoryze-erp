import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DistributorRequestService } from './distributor-request.service';
import { DistributorRequestController } from './distributor-request.controller';
import { DistributorRequest, DistributorRequestSchema } from './distributor-request.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DistributorRequest.name, schema: DistributorRequestSchema },
    ]),
  ],
  controllers: [DistributorRequestController],
  providers: [DistributorRequestService],
  exports: [DistributorRequestService],
})
export class DistributorRequestModule {}