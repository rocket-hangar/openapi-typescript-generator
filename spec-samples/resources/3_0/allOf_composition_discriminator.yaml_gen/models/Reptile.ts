/* eslint-disable */
/**
 * OAI Specification example for Polymorphism
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

import { Pet } from './';

/**
 *
 * @interface Reptile
 */
export interface Reptile extends Pet {}

export const ReptileModel: GenericModel = {
  classname: 'Reptile',
  type: 'generic',
  parent: 'Pet',
};