import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { getModelToken } from "@nestjs/mongoose";
import * as bcrypt from "bcryptjs";

import { Manufacturer } from "../manufacturer/manufacturer.schema";
import { Model } from "mongoose";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const manufacturerModel = app.get<Model<Manufacturer>>(
    getModelToken(Manufacturer.name),
  );

  const existing = await manufacturerModel.findOne({
    loginId: "factory001",
  });

  if (existing) {
    console.log("Manufacturer already exists");
    await app.close();
    return;
  }

  const hashedPassword = await bcrypt.hash("iit@7890", 10);

  const manufacturer = await manufacturerModel.create({
    loginId: "factory001",
    password: hashedPassword,
    name: "Factoryze",
    role: "manufacturer",
    companyName: "Factoryze Ltd",
    ownerName: "Rahat",
    email: "factoryze@gmail.com",
    phone: "01700000000",
    address: "Dhaka",
    licenseNumber: "LIC123",
  });

  console.log("Seeded Manufacturer:", manufacturer);

  await app.close();
}

bootstrap();