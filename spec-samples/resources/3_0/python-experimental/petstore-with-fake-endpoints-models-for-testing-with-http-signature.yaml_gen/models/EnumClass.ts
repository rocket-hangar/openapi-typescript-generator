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
export enum EnumClass {
  Abc = '_abc',
  Efg = '-efg',
  Xyz = '(xyz)',
}

export const EnumClassModel: EnumModel = {
  classname: 'EnumClass',
  type: 'enum',
  enumVars: new Set(['_abc', '-efg', '(xyz)']),
};
