/* eslint-disable */
/**
 * OAI Specification example for Polymorphism
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { OneOfModel } from '@rocket-scripts/openapi';

import { Cat, Lizard } from './';

/**
 * @type MyPets
 *
 */
export type MyPets =
  | ({ petType: 'cat' } & Cat)
  | ({ petType: 'lizard' } & Lizard);

export const MyPetsModel: OneOfModel = {
  classname: 'MyPets',
  type: 'oneOf',
  discriminator: {
    propertyName: 'petType',
    mappedModels: [
      { mappingName: 'cat', modelName: 'Cat' },
      { mappingName: 'lizard', modelName: 'Lizard' },
    ],
  },
};