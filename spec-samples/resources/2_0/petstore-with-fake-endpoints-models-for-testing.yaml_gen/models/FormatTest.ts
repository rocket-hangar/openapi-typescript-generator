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

import { BigDecimal } from './';

/**
 *
 * @interface FormatTest
 */
export interface FormatTest {
  /**
   *
   * @type {number}
   * @memberof FormatTest
   */
  integer?: number;

  /**
   *
   * @type {number}
   * @memberof FormatTest
   */
  int32?: number;

  /**
   *
   * @type {number}
   * @memberof FormatTest
   */
  int64?: number;

  /**
   *
   * @type {number}
   * @memberof FormatTest
   */
  number: number;

  /**
   *
   * @type {number}
   * @memberof FormatTest
   */
  _float?: number;

  /**
   *
   * @type {number}
   * @memberof FormatTest
   */
  _double?: number;

  /**
   *
   * @type {string}
   * @memberof FormatTest
   */
  string?: string;

  /**
   *
   * @type {string}
   * @memberof FormatTest
   */
  _byte: string;

  /**
   *
   * @type {Blob}
   * @memberof FormatTest
   */
  binary?: Blob;

  /**
   *
   * @type {Date}
   * @memberof FormatTest
   */
  date: Date;

  /**
   *
   * @type {Date}
   * @memberof FormatTest
   */
  dateTime?: Date;

  /**
   *
   * @type {string}
   * @memberof FormatTest
   */
  uuid?: string;

  /**
   *
   * @type {string}
   * @memberof FormatTest
   */
  password: string;

  /**
   *
   * @type {BigDecimal}
   * @memberof FormatTest
   */
  bigDecimal?: BigDecimal;
}

export const FormatTestModel: GenericModel = {
  classname: 'FormatTest',
  type: 'generic',
  parent: undefined,
  vars: {
    integer: [
      'integer', // name
      'integer', // baseName
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
    int32: [
      'int32', // name
      'int32', // baseName
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
    int64: [
      'int64', // name
      'int64', // baseName
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
      false, // isInteger
      false, // isListContainer
      true, // isLong
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
    number: [
      'number', // name
      'number', // baseName
      'number', // datatype
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
      false, // isListContainer
      false, // isLong
      false, // isMapContainer
      false, // isModel
      false, // isNullable
      true, // isNumber
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
    _float: [
      '_float', // name
      'float', // baseName
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
      true, // isFloat
      false, // isFreeFormObject
      false, // isInherited
      false, // isInteger
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
    _double: [
      '_double', // name
      'double', // baseName
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
      true, // isDouble
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
    string: [
      'string', // name
      'string', // baseName
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
      false, // isEnum
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
    _byte: [
      '_byte', // name
      'byte', // baseName
      'string', // datatype
      true, // required
      undefined, // itemsDataType
      false, // isAnyType
      false, // isBinary
      false, // isBoolean
      true, // isByteArray
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
    binary: [
      'binary', // name
      'binary', // baseName
      'Blob', // datatype
      false, // required
      undefined, // itemsDataType
      false, // isAnyType
      true, // isBinary
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
      true, // isFile
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
      false, // isString
      false, // isUri
      false, // isUuid
      false, // isWriteOnly
      false, // isXmlAttribute
      false, // isXmlWrapped
    ],
    date: [
      'date', // name
      'date', // baseName
      'Date', // datatype
      true, // required
      undefined, // itemsDataType
      false, // isAnyType
      false, // isBinary
      false, // isBoolean
      false, // isByteArray
      false, // isCircularReference
      false, // isContainer
      true, // isDate
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
    dateTime: [
      'dateTime', // name
      'dateTime', // baseName
      'Date', // datatype
      false, // required
      undefined, // itemsDataType
      false, // isAnyType
      false, // isBinary
      false, // isBoolean
      false, // isByteArray
      false, // isCircularReference
      false, // isContainer
      false, // isDate
      true, // isDateTime
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
    uuid: [
      'uuid', // name
      'uuid', // baseName
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
      false, // isEnum
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
      true, // isUuid
      false, // isWriteOnly
      false, // isXmlAttribute
      false, // isXmlWrapped
    ],
    password: [
      'password', // name
      'password', // baseName
      'string', // datatype
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
    bigDecimal: [
      'bigDecimal', // name
      'BigDecimal', // baseName
      'BigDecimal', // datatype
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
      false, // isModel
      false, // isNullable
      false, // isNumber
      false, // isNumeric
      false, // isPrimitiveType
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
    integer: 'integer',
    int32: 'int32',
    int64: 'int64',
    number: 'number',
    _float: 'float',
    _double: 'double',
    string: 'string',
    _byte: 'byte',
    binary: 'binary',
    date: 'date',
    dateTime: 'dateTime',
    uuid: 'uuid',
    password: 'password',
    bigDecimal: 'BigDecimal',
  },
};
