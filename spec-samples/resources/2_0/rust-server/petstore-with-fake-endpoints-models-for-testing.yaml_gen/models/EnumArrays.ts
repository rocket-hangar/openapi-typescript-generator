/* eslint-disable */
/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

/**
 *
 * @interface EnumArrays
 */
export interface EnumArrays {
  /**
   *
   * @type {string}
   * @memberof EnumArrays
   */
  justSymbol?: EnumArraysJustSymbolEnum;

  /**
   *
   * @type {Array<string>}
   * @memberof EnumArrays
   */
  arrayEnum?: Array<EnumArraysArrayEnumEnum>;

  /**
   *
   * @type {Array<Array<string>>}
   * @memberof EnumArrays
   */
  arrayArrayEnum?: Array<Array<EnumArraysArrayArrayEnumEnum>>;
}

export const EnumArraysModel: GenericModel = {
  classname: 'EnumArrays',
  type: 'generic',
  parent: undefined,
  vars: {
    justSymbol: [
      'justSymbol', // name
      'just_symbol', // baseName
      'string', // datatype
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
      true, // isEnum
      false, // isFile
      false, // isFloat
      false, // isFreeFormObject
      false, // isInherited
      false, // isInteger
      false, // isListContainer
      false, // isLong
      false, // isMapContainer
      false, // isModel
      false, // isNullable
      false, // isNumber
      false, // isNumeric
      true, // isPrimitiveType
      false, // isReadOnly
      false, // isSelfReference
      true, // isString
      false, // isUri
      false, // isUuid
      false, // isWriteOnly
      false, // isXmlAttribute
      false, // isXmlWrapped
    ],
    arrayEnum: [
      'arrayEnum', // name
      'array_enum', // baseName
      'Array&lt;string&gt;', // datatype
      false, // required
      'string', // itemsDataType
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
      true, // isEnum
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
    arrayArrayEnum: [
      'arrayArrayEnum', // name
      'array_array_enum', // baseName
      'Array&lt;Array&lt;string&gt;&gt;', // datatype
      false, // required
      'Array&lt;string&gt;', // itemsDataType
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
      true, // isEnum
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
    justSymbol: 'just_symbol',
    arrayEnum: 'array_enum',
    arrayArrayEnum: 'array_array_enum',
  },
};

/**
 * @enum {string}
 */
export enum EnumArraysJustSymbolEnum {
  GreaterThanOrEqualTo = '>=',
  Dollar = '$',
}
/**
 * @enum {string}
 */
export enum EnumArraysArrayEnumEnum {
  Fish = 'fish',
  Crab = 'crab',
}
/**
 * @enum {string}
 */
export enum EnumArraysArrayArrayEnumEnum {
  Cat = 'Cat',
  Dog = 'Dog',
}
