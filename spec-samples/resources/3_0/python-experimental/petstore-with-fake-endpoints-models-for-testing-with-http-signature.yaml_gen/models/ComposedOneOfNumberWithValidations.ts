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

import { Animal } from './';

/**
 * @type ComposedOneOfNumberWithValidations
 * this is a model that allows payloads of type object or number
 */
export type ComposedOneOfNumberWithValidations = Animal | Date | Null | number;

export const ComposedOneOfNumberWithValidationsModel: OneOfModel = {
  classname: 'ComposedOneOfNumberWithValidations',
  type: 'oneOf',
  oneOf: ['Animal', 'Date', 'Null', 'number'],
};