/* eslint-disable */
/**
 * sample spec
 * blah
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
export enum SubObjType {
  Daily = 'daily',
  Monthly = 'monthly',
  Quarterly = 'quarterly',
  Yearly = 'yearly',
}

export const SubObjTypeModel: EnumModel = {
  classname: 'SubObjType',
  type: 'enum',
  enumVars: new Set(['daily', 'monthly', 'quarterly', 'yearly']),
};
