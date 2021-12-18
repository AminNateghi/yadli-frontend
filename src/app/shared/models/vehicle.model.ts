import { FuelTypeEnum } from "../enums/fuel-type.enum";

export class Vehicle {
  name!: string;
  brandName!: string;
  modelName!: string;
  year!: number;
  fuelType!: FuelTypeEnum;
  licenseNo!: string;
  vin!: string;
  description?: string;
}
