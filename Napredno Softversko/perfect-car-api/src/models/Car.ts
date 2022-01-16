import {
  BODY_TYPES,
  CAR_MAKES,
  FUEL_TYPE,
  CAR_GEARS,
  NUMBER_OF_DOORS,
  OPTIONAL_EQUIPMENT,
  BODY_COLOR,
  PAINT_WORK,
  INTERIOR_COLOR,
  UPHOLSTERY,
  EURO_EMISSION_CLASS,
} from '../constants/car';

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
export type BodyColorType = ObjectValues<typeof BODY_COLOR>;
export type PaintWorkType = ObjectValues<typeof PAINT_WORK>;
export type InteriorColorType = ObjectValues<typeof INTERIOR_COLOR>;
export type UpholsteryType = ObjectValues<typeof UPHOLSTERY>;
export type EuroEmissionType = ObjectValues<typeof EURO_EMISSION_CLASS>;

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
  optionalEquipment: Array<ObjectValues<typeof OPTIONAL_EQUIPMENT>>;
};

export type Exterior = {
  bodyColor: BodyColorType;
  paintwork: PaintWorkType;
};

export type Interior = {
  interiorColor: InteriorColorType;
  upholstery: UpholsteryType;
};

export type Car = CarBasicInfo & OptionalEquipment & Exterior & Interior;
