import { X509Certificate } from 'crypto';
import { FastifySchema } from 'fastify';
import {
  BODY_COLOR,
  BODY_TYPES,
  CAR_GEARS,
  CAR_MAKES,
  EURO_EMISSION_CLASS,
  FUEL_TYPE,
  INTERIOR_COLOR,
  NUMBER_OF_DOORS,
  NUMBER_OF_SEATS,
  OPTIONAL_EQUIPMENT,
  PAINT_WORK,
  UPHOLSTERY,
} from '../../constants/car';
import { ENUM_CAR_MAKES } from '../../db/models/car.model';

export const fileSchema = {
  $id: 'fileSchema',
  type: 'object',
  properties: {
    name: { type: 'string' },
    type: { type: 'string' },
    key: { type: 'string' },
  },
};

export const carSchema = {
  $id: 'carSchema',
  type: 'object',
  properties: {
    make: { type: 'string', enum: ENUM_CAR_MAKES },
    model: { type: 'string' }, //add enum for models
    variant: { type: 'string' },
    bodyType: { type: 'string', enum: Object.values(BODY_TYPES) },
    firstRegistration: { type: 'string' },
    price: { type: 'number', minimum: 1, maximum: 5000000 },
    fuelType: { type: 'string', enum: Object.values(FUEL_TYPE) },
    kilometars: { type: 'number' },
    kwPower: {
      type: 'number',
    },
    gear: {
      type: 'string',
      enum: Object.values(CAR_GEARS),
    },
    numOfDoors: {
      type: 'string',
      enum: Object.values(NUMBER_OF_DOORS),
    },
    numOfSeets: {
      type: 'string',
      enum: Object.values(NUMBER_OF_SEATS),
    },
    euroEmissionClass: {
      type: 'string',
      enum: Object.values(EURO_EMISSION_CLASS),
    },
    optionalEquipment: {
      type: 'string',
      enum: Object.values(OPTIONAL_EQUIPMENT),
    },
    bodyColor: {
      type: 'string',
      enum: Object.values(BODY_COLOR),
    },
    paintWork: {
      type: 'string',
      enum: Object.values(PAINT_WORK),
    },
    interiorColor: {
      type: 'string',
      enum: Object.values(INTERIOR_COLOR),
    },
    upholstery: {
      type: 'string',
      enum: Object.values(UPHOLSTERY),
    },
    description: {
      type: 'string',
    },
  },
  required: [
    'make',
    'model',
    'variant',
    'bodyType',
    'price',
    'fuelType',
    'kilometars',
    'kwPower',
    'gear',
    'numOfDoors',
    'numOfSeets',
    'euroEmissionClass',
    'bodyColor',
  ],
};
