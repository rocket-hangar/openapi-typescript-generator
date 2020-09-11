/* eslint-disable */
/**
 * sample spec
 * blah
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

/**
 *
 * @interface DailySubObjAllOf
 */
export interface DailySubObjAllOf {
  /**
   *
   * @type {number}
   * @memberof DailySubObjAllOf
   */
  dayOfMonth?: number;
}

export const DailySubObjAllOfModel: GenericModel = {
  classname: 'DailySubObjAllOf',
  type: 'generic',
  parent: undefined,
  vars: {
    dayOfMonth: [
      'dayOfMonth', // name
      'day_of_month', // baseName
      'number', // datatype
      false, // required
      undefined, // itemsDataType
      false, // isAnyType
      false, // isBinary
      false, // isBoolean
      false, // isByteArray
      false, // isCircularReference
      false, // isContainer
      false, // isDate
      false, // isDateTime
      false, // isDiscriminator
      false, // isDouble
      false, // isEmail
      false, // isEnum
      false, // isFile
      false, // isFloat
      false, // isFreeFormObject
      false, // isInherited
      true, // isInteger
      false, // isListContainer
      false, // isLong
      false, // isMapContainer
      false, // isModel
      false, // isNullable
      false, // isNumber
      true, // isNumeric
      true, // isPrimitiveType
      false, // isReadOnly
      false, // isSelfReference
      false, // isString
      false, // isUri
      false, // isUuid
      false, // isWriteOnly
      false, // isXmlAttribute
      false, // isXmlWrapped
    ],
  },
  baseNames: {
    dayOfMonth: 'day_of_month',
  },
};
