/* eslint-disable */
/**
 * fruity
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { OneOfModel } from '@rocket-scripts/openapi';

import {
  AppleReqDisc,
  BananaReqDisc,
} from './';

/**
* @type FruitReqDisc
* 
*/
export type FruitReqDisc = ;

export const FruitReqDiscModel: OneOfModel = {
  classname: 'FruitReqDisc',
  type: 'oneOf',
  discriminator: {
    propertyName: 'fruitType',
    mappedModels: [
    ],
  },
}