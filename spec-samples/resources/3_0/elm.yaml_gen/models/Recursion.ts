/* eslint-disable */
/**
 * Elm generator test
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

import { RecursionLoop } from './';

/**
 *
 * @interface Recursion
 */
export interface Recursion {
  /**
   *
   * @type {Recursion}
   * @memberof Recursion
   */
  maybe?: Recursion;

  /**
   *
   * @type {Array<Recursion>}
   * @memberof Recursion
   */
  list?: Array<Recursion>;

  /**
   *
   * @type {RecursionLoop}
   * @memberof Recursion
   */
  ref?: RecursionLoop;
}

export const RecursionModel: GenericModel = {
  classname: 'Recursion',
  type: 'generic',
  parent: undefined,
  vars: {
    maybe: [
      'maybe', // name
      'maybe', // baseName
      'Recursion', // datatype
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
      false, // isInteger
      false, // isListContainer
      false, // isLong
      false, // isMapContainer
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
    list: [
      'list', // name
      'list', // baseName
      'Array&lt;Recursion&gt;', // datatype
      false, // required
      'Recursion', // itemsDataType
      false, // isAnyType
      false, // isBinary
      false, // isBoolean
      false, // isByteArray
      false, // isCircularReference
      true, // isContainer
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
      true, // isListContainer
      false, // isLong
      false, // isMapContainer
      false, // isModel
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
    ref: [
      'ref', // name
      'ref', // baseName
      'RecursionLoop', // datatype
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
      false, // isInteger
      false, // isListContainer
      false, // isLong
      false, // isMapContainer
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
    maybe: 'maybe',
    list: 'list',
    ref: 'ref',
  },
};
