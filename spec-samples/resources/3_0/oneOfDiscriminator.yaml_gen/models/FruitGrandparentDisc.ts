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
  AppleGrandparentDisc,
  BananaGrandparentDisc,
} from './';

/**
* @type FruitGrandparentDisc
* 
*/
export type FruitGrandparentDisc = ;

export const FruitGrandparentDiscModel: OneOfModel = {
  classname: 'FruitGrandparentDisc',
  type: 'oneOf',
  discriminator: {
    propertyName: 'fruitType',
    mappedModels: [
    ],
  },
}
