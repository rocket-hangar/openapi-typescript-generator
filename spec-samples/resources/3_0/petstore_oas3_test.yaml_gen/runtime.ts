/* eslint-disable */
/**
 * OpenAPI Petstore
 * A test spec based on the Petstore spec with OAS3 related test cases such as nullable
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { TypeSerializer } from '@rocket-scripts/openapi';

import { CategoryModel } from './models/Category';
import { InlineObjectModel } from './models/InlineObject';
import { InlineObject1Model } from './models/InlineObject1';
import { ModelApiResponseModel } from './models/ModelApiResponse';
import { NullablePetModel } from './models/NullablePet';
import { OrderModel } from './models/Order';
import { PetModel } from './models/Pet';
import { TagModel } from './models/Tag';
import { UserModel } from './models/User';

export const typeSerializer = new TypeSerializer({
  Category: CategoryModel,
  InlineObject: InlineObjectModel,
  InlineObject1: InlineObject1Model,
  ModelApiResponse: ModelApiResponseModel,
  NullablePet: NullablePetModel,
  Order: OrderModel,
  Pet: PetModel,
  Tag: TagModel,
  User: UserModel,
});
