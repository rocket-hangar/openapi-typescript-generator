/* eslint-disable */
/**
 * My title
 * API under test
 *
 * The version of the OpenAPI document: 1.0.7
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { EnumModel } from '@rocket-scripts/openapi';

/**
 * Test a model containing a special character in the enum
 * @enum {string}
 */
export enum EnumWithStarObject {
  FOO = 'FOO',
  BAR = 'BAR',
  Star = '*',
}

export const EnumWithStarObjectModel: EnumModel = {
  classname: 'EnumWithStarObject',
  type: 'enum',
  enumVars: new Set(['FOO', 'BAR', '*']),
};
