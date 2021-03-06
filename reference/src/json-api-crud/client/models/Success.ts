/* eslint-disable */
/**
 * JSON CRUD API
 * JSON CRUD API Description
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

import { Detail } from './';

/**
 * success object
 * @interface Success
 */
export interface Success {
  /**
   *
   * @type {Detail}
   * @memberof Success
   */
  success: Detail;
}

export const SuccessModel: GenericModel = {
  classname: 'Success',
  type: 'generic',
  parent: undefined,
  vars: {
    success: [
      'success', // name
      'success', // baseName
      'Detail', // datatype
      true, // required
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
      false, // isInteger
      false, // isArray
      false, // isLong
      false, // isMap
      true, // isModel
      false, // isNullable
      false, // isNumber
      false, // isNumeric
      false, // isPrimitiveType
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
    success: 'success',
  },
};
