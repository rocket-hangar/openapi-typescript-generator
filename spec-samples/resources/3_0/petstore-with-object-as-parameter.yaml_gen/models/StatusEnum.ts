/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { EnumModel } from '@rocket-scripts/openapi';

/**
 * pet status in the store
 * @enum {string}
 */
export enum StatusEnum {
  Available = 'available',
  Pending = 'pending',
  Sold = 'sold',
}

export const StatusEnumModel: EnumModel = {
  classname: 'StatusEnum',
  type: 'enum',
  enumVars: new Set(['available', 'pending', 'sold']),
};