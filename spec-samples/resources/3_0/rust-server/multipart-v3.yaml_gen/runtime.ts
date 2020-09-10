/* eslint-disable */
/**
 * Multipart OpenAPI V3 Rust Server Test
 * API under test
 *
 * The version of the OpenAPI document: 1.0.7
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { TypeSerializer } from '@rocket-scripts/openapi';

import { InlineObjectModel } from './models/InlineObject';
import { MultipartRelatedRequestModel } from './models/MultipartRelatedRequest';
import { MultipartRequestModel } from './models/MultipartRequest';
import { MultipartRequestObjectFieldModel } from './models/MultipartRequestObjectField';

export const typeSerializer = new TypeSerializer({
  InlineObject: InlineObjectModel,
  MultipartRelatedRequest: MultipartRelatedRequestModel,
  MultipartRequest: MultipartRequestModel,
  MultipartRequestObjectField: MultipartRequestObjectFieldModel,
});
