/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key \"special-key\" to test the authorization filters
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { TypeSerializer } from '@rocket-scripts/openapi';

import { CategoryModel } from './models/Category';
import { PetModel } from './models/Pet';

export const typeSerializer = new TypeSerializer({
  Category: CategoryModel,
  Pet: PetModel,
});
