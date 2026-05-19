import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { DistributorRequest } from './distributor-request.schema';
import { CreateDistributorRequestDto } from './dto/create-distributor-request.dto';
import { UpdateDistributorRequestDto } from './dto/update-distributor-request.dto';

@Injectable()
export class DistributorRequestService {
  constructor(
    @InjectModel(DistributorRequest.name)
    private distributorRequestModel: Model<DistributorRequest>,
  ) {}

  async create(dto: CreateDistributorRequestDto, distributorId: string, manufacturerId: string): Promise<DistributorRequest> {
    const request = new this.distributorRequestModel({
      ...dto,
      distributorId: new Types.ObjectId(distributorId),
      manufacturerId: new Types.ObjectId(manufacturerId),
    });
    return request.save();
  }

  async findAllForManufacturer(manufacturerId: string): Promise<DistributorRequest[]> {
    return this.distributorRequestModel
      .find({ manufacturerId })
      .populate('distributorId', 'name loginId');
  }

  async findAllForDistributor(distributorId: string): Promise<DistributorRequest[]> {
    return this.distributorRequestModel.find({ distributorId });
  }

  async updateStatus(id: string, dto: UpdateDistributorRequestDto): Promise<DistributorRequest> {
    const request = await this.distributorRequestModel.findByIdAndUpdate(id, dto, { new: true });
    if (!request) throw new NotFoundException('Request not found');
    return request;
  }
}