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
 * @interface InlineObject2
 */
export interface InlineObject2 {
  /**
   * Form parameter enum test (string array)
   * @type {Array<string>}
   * @memberof InlineObject2
   */
  enumFormStringArray?: Array<InlineObject2EnumFormStringArrayEnum>;

  /**
   * Form parameter enum test (string)
   * @type {string}
   * @memberof InlineObject2
   */
  enumFormString?: InlineObject2EnumFormStringEnum;
}

export const InlineObject2Model: GenericModel = {
  classname: 'InlineObject2',
  type: 'generic',
  parent: undefined,
  vars: {
    enumFormStringArray: [
      'enumFormStringArray', // name
      'enum_form_string_array', // baseName
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
    enumFormString: [
      'enumFormString', // name
      'enum_form_string', // baseName
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
  },
  baseNames: {
    enumFormStringArray: 'enum_form_string_array',
    enumFormString: 'enum_form_string',
  },
};

/**
 * @enum {string}
 */
export enum InlineObject2EnumFormStringArrayEnum {
  GreaterThan = '>',
  Dollar = '$',
}
/**
 * @enum {string}
 */
export enum InlineObject2EnumFormStringEnum {
  Abc = '_abc',
  Efg = '-efg',
  Xyz = '(xyz)',
}
