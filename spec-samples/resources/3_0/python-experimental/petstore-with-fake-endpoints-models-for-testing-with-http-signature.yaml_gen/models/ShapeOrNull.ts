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

import {
  Quadrilateral,
  Triangle,
} from './';

/**
* @type ShapeOrNull
* The value may be a shape or the 'null' value. This is introduced in OAS schema >= 3.1.
*/
export type ShapeOrNull = ;

export const ShapeOrNullModel: OneOfModel = {
  classname: 'ShapeOrNull',
  type: 'oneOf',
  discriminator: {
    propertyName: 'shapeType',
    mappedModels: [
    ],
  },
}
