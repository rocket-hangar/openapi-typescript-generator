/* eslint-disable */
/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { EnumModel } from '@rocket-scripts/openapi';

/**
 *
 * @enum {string}
 */
export enum IntegerEnumWithDefaultValue {
  NUMBER_0 = 0,
  NUMBER_1 = 1,
  NUMBER_2 = 2,
}

export const IntegerEnumWithDefaultValueModel: EnumModel = {
  classname: 'IntegerEnumWithDefaultValue',
  type: 'enum',
  enumVars: new Set([0, 1, 2]),
};
