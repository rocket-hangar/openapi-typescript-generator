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

import { AdultModel } from './models/Adult';
import { AdultAllOfModel } from './models/AdultAllOf';
import { ChildModel } from './models/Child';
import { ChildAllOfModel } from './models/ChildAllOf';
import { MapOnlyWithPropertiesModel } from './models/MapOnlyWithProperties';
import { PersonModel } from './models/Person';

export const typeSerializer = new TypeSerializer({
  Adult: AdultModel,
  AdultAllOf: AdultAllOfModel,
  Child: ChildModel,
  ChildAllOf: ChildAllOfModel,
  MapOnlyWithProperties: MapOnlyWithPropertiesModel,
  Person: PersonModel,
});
