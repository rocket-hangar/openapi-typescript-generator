/* eslint-disable */
/**
 * Application
 * App
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { TypeSerializer } from '@rocket-scripts/openapi';

import { OptionsModel } from './models/Options';
import { ResourceModel } from './models/Resource';
import { ResourceRequestModel } from './models/ResourceRequest';
import { ResourceRequestAllOfModel } from './models/ResourceRequestAllOf';

export const typeSerializer = new TypeSerializer({
  Options: OptionsModel,
  Resource: ResourceModel,
  ResourceRequest: ResourceRequestModel,
  ResourceRequestAllOf: ResourceRequestAllOfModel,
});
