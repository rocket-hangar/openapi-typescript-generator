/* eslint-disable */
/**
 * Example
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { TypeSerializer } from '@rocket-scripts/openapi';

import { PersonModel } from './models/Person';
import { PersonAllOfModel } from './models/PersonAllOf';
import { PersonForCreationModel } from './models/PersonForCreation';
import { PersonForUpdateModel } from './models/PersonForUpdate';

export const typeSerializer = new TypeSerializer({
  Person: PersonModel,
  PersonAllOf: PersonAllOfModel,
  PersonForCreation: PersonForCreationModel,
  PersonForUpdate: PersonForUpdateModel,
});
