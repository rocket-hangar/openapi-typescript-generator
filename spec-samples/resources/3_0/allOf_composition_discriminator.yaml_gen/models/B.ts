/* eslint-disable */
/**
 * OAI Specification example for Polymorphism
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

import { A } from './';

/**
 *
 * @interface B
 */
export interface B extends A {}

export const BModel: GenericModel = {
  classname: 'B',
  type: 'generic',
  parent: 'A',
};
