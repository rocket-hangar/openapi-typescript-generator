/* eslint-disable */
/**
 * oneOf test
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { OneOfModel } from '@rocket-scripts/openapi';

import { ObjA, ObjB } from './';

/**
 * @type CustomOneOfSchema
 *
 */
export type CustomOneOfSchema =
  | ({ realtype: 'a-type' } & ObjA)
  | ({ realtype: 'b-type' } & ObjB);

export const CustomOneOfSchemaModel: OneOfModel = {
  classname: 'CustomOneOfSchema',
  type: 'oneOf',
  discriminator: {
    propertyName: 'realtype',
    mappedModels: [
      { mappingName: 'a-type', modelName: 'ObjA' },
      { mappingName: 'b-type', modelName: 'ObjB' },
    ],
  },
};
