/* eslint-disable */
/**
 * Scala Client API Integration Test
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { TypeSerializer } from '@rocket-scripts/openapi';

import { HobbyModel } from './models/Hobby';
import { PersonModel } from './models/Person';

export const typeSerializer = new TypeSerializer({
  Hobby: HobbyModel,
  Person: PersonModel,
});
