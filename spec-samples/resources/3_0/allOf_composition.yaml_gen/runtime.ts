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

import { HeroModel } from './models/Hero';
import { HumanModel } from './models/Human';
import { SuperBabyModel } from './models/SuperBaby';
import { SuperBabyAllOfModel } from './models/SuperBabyAllOf';
import { SuperBoyModel } from './models/SuperBoy';
import { SuperBoyAllOfModel } from './models/SuperBoyAllOf';
import { SuperManModel } from './models/SuperMan';

export const typeSerializer = new TypeSerializer({
  Hero: HeroModel,
  Human: HumanModel,
  SuperBaby: SuperBabyModel,
  SuperBabyAllOf: SuperBabyAllOfModel,
  SuperBoy: SuperBoyModel,
  SuperBoyAllOf: SuperBoyAllOfModel,
  SuperMan: SuperManModel,
});
