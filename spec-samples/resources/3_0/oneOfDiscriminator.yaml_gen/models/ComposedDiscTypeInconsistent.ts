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
  DiscTypeIncorrect,
  FruitType,
} from './';

/**
* @type ComposedDiscTypeInconsistent
* 
*/
export type ComposedDiscTypeInconsistent = ;

export const ComposedDiscTypeInconsistentModel: OneOfModel = {
  classname: 'ComposedDiscTypeInconsistent',
  type: 'oneOf',
  discriminator: {
    propertyName: 'fruitType',
    mappedModels: [
    ],
  },
}
