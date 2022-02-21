import { Document, Schema, model } from 'mongoose';
import {
  CAR_MAKES,
  BODY_TYPES,
  FUEL_TYPE,
  CAR_GEARS,
  NUMBER_OF_DOORS,
  BODY_COLOR,
  PAINT_WORK,
  INTERIOR_COLOR,
  UPHOLSTERY,
  EURO_EMISSION_CLASS,
  OPTIONAL_EQUIPMENT,
  NUMBER_OF_SEATS,
} from '../../constants/car';
import { FileSchema, FileType } from '../schemas/file.schema';
import { IUser } from './user.model';

export type DataRange = {
  from: number;
  to: number;
};

export type ObjectValues<T> = T[keyof T];

export type CarMakes = typeof CAR_MAKES[number]['brand'];
export type CarModels = typeof CAR_MAKES[number]['models'];

export type BodyTypes = ObjectValues<typeof BODY_TYPES>;
export type FuelTypes = ObjectValues<typeof FUEL_TYPE>;
export type GearTypes = ObjectValues<typeof CAR_GEARS>;
export type NumOfDoorsType = ObjectValues<typeof NUMBER_OF_DOORS>;
export type NumOfSeats = ObjectValues<typeof NUMBER_OF_SEATS>;
export type BodyColorType = ObjectValues<typeof BODY_COLOR>;
export type PaintWorkType = ObjectValues<typeof PAINT_WORK>;
export type InteriorColorType = ObjectValues<typeof INTERIOR_COLOR>;
export type UpholsteryType = ObjectValues<typeof UPHOLSTERY>;
export type EuroEmissionType = ObjectValues<typeof EURO_EMISSION_CLASS>;
export type OptionalEquipmentType = ObjectValues<typeof OPTIONAL_EQUIPMENT>;

export type CarBasicInfo = {
  make: CarMakes;
  model: string;
  variant: string; //description prop like 1.9TDI or GTI
  bodyType: BodyTypes;
  firstRegistration: string;
  price: number;
  fuelType: FuelTypes;
  kilometars: number;
  kwPower: number;
  gear: GearTypes;
  numOfDoors: NumOfDoorsType;
  numOfSeets: number;
  euroEmissionClass: EuroEmissionType;
};

export type OptionalEquipment = {
  optionalEquipment: Array<OptionalEquipmentType>;
};

export type Exterior = {
  bodyColor: BodyColorType;
  paintWork: PaintWorkType;
};

export type Interior = {
  interiorColor: InteriorColorType;
  upholstery: UpholsteryType;
};

export type Car = CarBasicInfo & OptionalEquipment & Exterior & Interior;

export interface ICar extends Document {
  make: CarMakes;
  model: string;
  variant: string; //description prop like 1.9TDI or GTI
  bodyType: BodyTypes;
  firstRegistration: string;
  price: number;
  fuelType: FuelTypes;
  kilometars: number;
  kwPower: number;
  gear: GearTypes;
  numOfDoors?: NumOfDoorsType;
  numOfSeets?: NumOfSeats;
  euroEmissionClass: EuroEmissionType;
  optionalEquipment?: Array<OptionalEquipmentType>;
  bodyColor: BodyColorType;
  paintWork?: PaintWorkType;
  interiorColor?: InteriorColorType;
  upholstery?: UpholsteryType;

  images: Array<FileType>;
  description: string;
  numOfSavedAds: number;

  userId: string;
}

export const ENUM_CAR_MAKES = CAR_MAKES.map((d) => d.brand);
export const ENUM_CAR_MODELS = Array.prototype.concat.apply(
  [],
  CAR_MAKES.map((d) => d.models),
);

const CarSchema = new Schema(
  {
    make: {
      type: String,
      enum: ENUM_CAR_MAKES,
      required: true,
    },
    model: {
      type: String,
      enum: ENUM_CAR_MODELS,
      required: true,
    },
    variant: {
      type: String,
      required: true,
    },
    bodyType: {
      type: String,
      enum: Object.values(BODY_TYPES),
      required: true,
    },
    firstRegistration: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    fuelType: {
      type: String,
      enum: Object.values(FUEL_TYPE),
      required: true,
    },
    kilometars: {
      type: Number,
      required: true,
    },
    kwPower: {
      type: Number,
      required: true,
    },
    gear: {
      type: String,
      enum: Object.values(CAR_GEARS),
      required: true,
    },
    numOfDoors: {
      type: String,
      enum: Object.values(NUMBER_OF_DOORS),
      required: true,
    },
    numOfSeets: {
      type: String,
      enum: Object.values(NUMBER_OF_SEATS),
      required: true,
    },
    euroEmissionClass: {
      type: String,
      enum: Object.values(EURO_EMISSION_CLASS),
      required: true,
    },
    optionalEquipment: {
      type: String,
      enum: Object.values(OPTIONAL_EQUIPMENT),
    },
    bodyColor: {
      type: String,
      enum: Object.values(BODY_COLOR),
      required: true,
    },
    paintWork: {
      type: String,
      enum: Object.values(PAINT_WORK),
    },
    interiorColor: {
      type: String,
      enum: Object.values(INTERIOR_COLOR),
    },
    upholstery: {
      type: String,
      enum: Object.values(UPHOLSTERY),
    },
    images: {
      type: [FileSchema],
    },
    descrption: {
      type: String,
    },
    numOfSavedAds: {
      type: Number,
    },
    userId: {
      type: Schema.Types.ObjectId,
      immutable: true,
      required: true,
    },
  },
  { timestamps: true },
);

const CarModel = model<ICar>('Car', CarSchema);

export { CarModel, CarSchema };
