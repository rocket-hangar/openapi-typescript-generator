/* eslint-disable */
/**
 * fruity
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

import { DiscTypeIncorrect } from './';

/**
 *
 * @interface ComposedDiscTypeIncorrect
 */
export interface ComposedDiscTypeIncorrect {}

export const ComposedDiscTypeIncorrectModel: GenericModel = {
  classname: 'ComposedDiscTypeIncorrect',
  type: 'generic',
  parent: undefined,
  discriminator: {
    propertyName: 'fruitType',
    mappedModels: [],
  },
};