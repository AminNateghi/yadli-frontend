import { FuelTypeEnum } from "../enums/fuel-type.enum";

export class VehicleBase {
  name!: string;
  brandName!: string;
  modelName!: string;
  year!: number;
  fuelType!: FuelTypeEnum;
  licenseNo!: string;
  vin!: string;
  description?: string;
}

export class VehicleAdd extends VehicleBase { }

export class VehicleEdit extends VehicleBase {
  id!: string;
}
