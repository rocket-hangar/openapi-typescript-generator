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

import { ReadOnlyFirst } from './';

/**
 *
 * @interface ArrayTest
 */
export interface ArrayTest {
  /**
   *
   * @type {Array<string>}
   * @memberof ArrayTest
   */
  arrayOfString?: Array<string>;

  /**
   *
   * @type {Array<Array<number>>}
   * @memberof ArrayTest
   */
  arrayArrayOfInteger?: Array<Array<number>>;

  /**
   *
   * @type {Array<Array<ReadOnlyFirst>>}
   * @memberof ArrayTest
   */
  arrayArrayOfModel?: Array<Array<ReadOnlyFirst>>;
}

export const ArrayTestModel: GenericModel = {
  classname: 'ArrayTest',
  type: 'generic',
  parent: undefined,
  vars: {
    arrayOfString: [
      'arrayOfString', // name
      'array_of_string', // baseName
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
    arrayArrayOfInteger: [
      'arrayArrayOfInteger', // name
      'array_array_of_integer', // baseName
      'Array&lt;Array&lt;number&gt;&gt;', // datatype
      false, // required
      'Array&lt;number&gt;', // itemsDataType
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
    arrayArrayOfModel: [
      'arrayArrayOfModel', // name
      'array_array_of_model', // baseName
      'Array&lt;Array&lt;ReadOnlyFirst&gt;&gt;', // datatype
      false, // required
      'Array&lt;ReadOnlyFirst&gt;', // itemsDataType
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
    arrayOfString: 'array_of_string',
    arrayArrayOfInteger: 'array_array_of_integer',
    arrayArrayOfModel: 'array_array_of_model',
  },
};
