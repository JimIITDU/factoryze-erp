import {
  Injectable,
  ConflictException,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import * as bcrypt from "bcryptjs";
import { Distributor } from "./distributor.schema";
import { CreateDistributorDto } from "./dto/create-distributor.dto";

@Injectable()
export class DistributorService {
  constructor(
    @InjectModel(Distributor.name)
    private distributorModel: Model<Distributor>,
  ) {}

  async create(dto: CreateDistributorDto): Promise<Distributor> {
    const exists = await this.distributorModel.findOne({
      loginId: dto.loginId,
    });
    if (exists) throw new ConflictException("Login ID already taken");
    const hashed = await bcrypt.hash(dto.password, 10);
    const distributor = new this.distributorModel({
      ...dto,
      password: hashed,
    });
    return distributor.save();
  }

  async findAll() {
    return this.distributorModel.find().select("-password");
  }

  async findOne(id: string): Promise<Distributor> {
    const distributor = await this.distributorModel
      .findById(id)
      .select("-password");
    if (!distributor) throw new NotFoundException("Distributor not found");
    return distributor;
  }
}
