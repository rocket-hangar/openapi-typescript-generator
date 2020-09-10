/* eslint-disable */
/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { OneOfModel } from '@rocket-scripts/openapi';

import { AppleReq, BananaReq } from './';

/**
 * @type FruitReq
 *
 */
export type FruitReq = AppleReq | BananaReq | Null;

export const FruitReqModel: OneOfModel = {
  classname: 'FruitReq',
  type: 'oneOf',
  oneOf: ['AppleReq', 'BananaReq', 'Null'],
};
