/* eslint-disable */
/**
 * sample spec
 * blah
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { TypeSerializer } from '@rocket-scripts/openapi';

import { BaseObjModel } from './models/BaseObj';
import { DailySubObjModel } from './models/DailySubObj';
import { DailySubObjAllOfModel } from './models/DailySubObjAllOf';
import { SubObjModel } from './models/SubObj';
import { SubObjAllOfModel } from './models/SubObjAllOf';
import { SubObjTypeModel } from './models/SubObjType';

export const typeSerializer = new TypeSerializer({
  BaseObj: BaseObjModel,
  DailySubObj: DailySubObjModel,
  DailySubObjAllOf: DailySubObjAllOfModel,
  SubObj: SubObjModel,
  SubObjAllOf: SubObjAllOfModel,
  SubObjType: SubObjTypeModel,
});
