/* eslint-disable */
/**
 * Example
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { TypeSerializer } from '@rocket-scripts/openapi';

import { CatModel } from './models/Cat';
import { CatAllOfModel } from './models/CatAllOf';
import { DogModel } from './models/Dog';
import { DogAllOfModel } from './models/DogAllOf';
import { InlineObjectModel } from './models/InlineObject';
import { PetByAgeModel } from './models/PetByAge';
import { PetByTypeModel } from './models/PetByType';

export const typeSerializer = new TypeSerializer({
  Cat: CatModel,
  CatAllOf: CatAllOfModel,
  Dog: DogModel,
  DogAllOf: DogAllOfModel,
  InlineObject: InlineObjectModel,
  PetByAge: PetByAgeModel,
  PetByType: PetByTypeModel,
});