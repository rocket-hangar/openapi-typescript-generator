/* eslint-disable */
/**
 * Scala Client API Integration Test
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

/**
 *
 * @interface Hobby
 */
export interface Hobby {
  /**
   *
   * @type {number}
   * @memberof Hobby
   */
  id?: number;

  /**
   *
   * @type {string}
   * @memberof Hobby
   */
  name?: string;

  /**
   *
   * @type {number}
   * @memberof Hobby
   */
  count?: number;

  /**
   *
   * @type {number}
   * @memberof Hobby
   */
  rate?: number;

  /**
   *
   * @type {number}
   * @memberof Hobby
   */
  ratio?: number;

  /**
   *
   * @type {boolean}
   * @memberof Hobby
   */
  enabled?: boolean;

  /**
   *
   * @type {Date}
   * @memberof Hobby
   */
  created?: Date;

  /**
   *
   * @type {Date}
   * @memberof Hobby
   */
  timestamp?: Date;

  /**
   *
   * @type {string}
   * @memberof Hobby
   */
  bytes?: string;

  /**
   *
   * @type {string}
   * @memberof Hobby
   */
  binary?: string;
}

export const HobbyModel: GenericModel = {
  classname: 'Hobby',
  type: 'generic',
  parent: undefined,
  vars: {
    id: {
      name: 'id',
      baseName: 'id',
      datatype: 'number',
      required: false,
      itemsDataType: undefined,
      isAnyType: false,
      isBinary: false,
      isBoolean: false,
      isByteArray: false,
      isCircularReference: false,
      isContainer: false,
      isDate: false,
      isDateTime: false,
      isDiscriminator: false,
      isDouble: false,
      isEmail: false,
      isEnum: false,
      isFile: false,
      isFloat: false,
      isFreeFormObject: false,
      isInherited: false,
      isInteger: false,
      isListContainer: false,
      isLong: true,
      isMapContainer: false,
      isModel: false,
      isNullable: false,
      isNumber: false,
      isNumeric: true,
      isPrimitiveType: true,
      isReadOnly: false,
      isSelfReference: false,
      isString: false,
      isUri: false,
      isUuid: false,
      isWriteOnly: false,
      isXmlAttribute: false,
      isXmlWrapped: false,
    },
    name: {
      name: 'name',
      baseName: 'name',
      datatype: 'string',
      required: false,
      itemsDataType: undefined,
      isAnyType: false,
      isBinary: false,
      isBoolean: false,
      isByteArray: false,
      isCircularReference: false,
      isContainer: false,
      isDate: false,
      isDateTime: false,
      isDiscriminator: false,
      isDouble: false,
      isEmail: false,
      isEnum: false,
      isFile: false,
      isFloat: false,
      isFreeFormObject: false,
      isInherited: false,
      isInteger: false,
      isListContainer: false,
      isLong: false,
      isMapContainer: false,
      isModel: false,
      isNullable: false,
      isNumber: false,
      isNumeric: false,
      isPrimitiveType: true,
      isReadOnly: false,
      isSelfReference: false,
      isString: true,
      isUri: false,
      isUuid: false,
      isWriteOnly: false,
      isXmlAttribute: false,
      isXmlWrapped: false,
    },
    count: {
      name: 'count',
      baseName: 'count',
      datatype: 'number',
      required: false,
      itemsDataType: undefined,
      isAnyType: false,
      isBinary: false,
      isBoolean: false,
      isByteArray: false,
      isCircularReference: false,
      isContainer: false,
      isDate: false,
      isDateTime: false,
      isDiscriminator: false,
      isDouble: false,
      isEmail: false,
      isEnum: false,
      isFile: false,
      isFloat: false,
      isFreeFormObject: false,
      isInherited: false,
      isInteger: true,
      isListContainer: false,
      isLong: false,
      isMapContainer: false,
      isModel: false,
      isNullable: false,
      isNumber: false,
      isNumeric: true,
      isPrimitiveType: true,
      isReadOnly: false,
      isSelfReference: false,
      isString: false,
      isUri: false,
      isUuid: false,
      isWriteOnly: false,
      isXmlAttribute: false,
      isXmlWrapped: false,
    },
    rate: {
      name: 'rate',
      baseName: 'rate',
      datatype: 'number',
      required: false,
      itemsDataType: undefined,
      isAnyType: false,
      isBinary: false,
      isBoolean: false,
      isByteArray: false,
      isCircularReference: false,
      isContainer: false,
      isDate: false,
      isDateTime: false,
      isDiscriminator: false,
      isDouble: false,
      isEmail: false,
      isEnum: false,
      isFile: false,
      isFloat: true,
      isFreeFormObject: false,
      isInherited: false,
      isInteger: false,
      isListContainer: false,
      isLong: false,
      isMapContainer: false,
      isModel: false,
      isNullable: false,
      isNumber: false,
      isNumeric: true,
      isPrimitiveType: true,
      isReadOnly: false,
      isSelfReference: false,
      isString: false,
      isUri: false,
      isUuid: false,
      isWriteOnly: false,
      isXmlAttribute: false,
      isXmlWrapped: false,
    },
    ratio: {
      name: 'ratio',
      baseName: 'ratio',
      datatype: 'number',
      required: false,
      itemsDataType: undefined,
      isAnyType: false,
      isBinary: false,
      isBoolean: false,
      isByteArray: false,
      isCircularReference: false,
      isContainer: false,
      isDate: false,
      isDateTime: false,
      isDiscriminator: false,
      isDouble: true,
      isEmail: false,
      isEnum: false,
      isFile: false,
      isFloat: false,
      isFreeFormObject: false,
      isInherited: false,
      isInteger: false,
      isListContainer: false,
      isLong: false,
      isMapContainer: false,
      isModel: false,
      isNullable: false,
      isNumber: false,
      isNumeric: true,
      isPrimitiveType: true,
      isReadOnly: false,
      isSelfReference: false,
      isString: false,
      isUri: false,
      isUuid: false,
      isWriteOnly: false,
      isXmlAttribute: false,
      isXmlWrapped: false,
    },
    enabled: {
      name: 'enabled',
      baseName: 'enabled',
      datatype: 'boolean',
      required: false,
      itemsDataType: undefined,
      isAnyType: false,
      isBinary: false,
      isBoolean: true,
      isByteArray: false,
      isCircularReference: false,
      isContainer: false,
      isDate: false,
      isDateTime: false,
      isDiscriminator: false,
      isDouble: false,
      isEmail: false,
      isEnum: false,
      isFile: false,
      isFloat: false,
      isFreeFormObject: false,
      isInherited: false,
      isInteger: false,
      isListContainer: false,
      isLong: false,
      isMapContainer: false,
      isModel: false,
      isNullable: false,
      isNumber: false,
      isNumeric: false,
      isPrimitiveType: true,
      isReadOnly: false,
      isSelfReference: false,
      isString: false,
      isUri: false,
      isUuid: false,
      isWriteOnly: false,
      isXmlAttribute: false,
      isXmlWrapped: false,
    },
    created: {
      name: 'created',
      baseName: 'created',
      datatype: 'Date',
      required: false,
      itemsDataType: undefined,
      isAnyType: false,
      isBinary: false,
      isBoolean: false,
      isByteArray: false,
      isCircularReference: false,
      isContainer: false,
      isDate: true,
      isDateTime: false,
      isDiscriminator: false,
      isDouble: false,
      isEmail: false,
      isEnum: false,
      isFile: false,
      isFloat: false,
      isFreeFormObject: false,
      isInherited: false,
      isInteger: false,
      isListContainer: false,
      isLong: false,
      isMapContainer: false,
      isModel: false,
      isNullable: false,
      isNumber: false,
      isNumeric: false,
      isPrimitiveType: true,
      isReadOnly: false,
      isSelfReference: false,
      isString: false,
      isUri: false,
      isUuid: false,
      isWriteOnly: false,
      isXmlAttribute: false,
      isXmlWrapped: false,
    },
    timestamp: {
      name: 'timestamp',
      baseName: 'timestamp',
      datatype: 'Date',
      required: false,
      itemsDataType: undefined,
      isAnyType: false,
      isBinary: false,
      isBoolean: false,
      isByteArray: false,
      isCircularReference: false,
      isContainer: false,
      isDate: false,
      isDateTime: true,
      isDiscriminator: false,
      isDouble: false,
      isEmail: false,
      isEnum: false,
      isFile: false,
      isFloat: false,
      isFreeFormObject: false,
      isInherited: false,
      isInteger: false,
      isListContainer: false,
      isLong: false,
      isMapContainer: false,
      isModel: false,
      isNullable: false,
      isNumber: false,
      isNumeric: false,
      isPrimitiveType: true,
      isReadOnly: false,
      isSelfReference: false,
      isString: false,
      isUri: false,
      isUuid: false,
      isWriteOnly: false,
      isXmlAttribute: false,
      isXmlWrapped: false,
    },
    bytes: {
      name: 'bytes',
      baseName: 'bytes',
      datatype: 'string',
      required: false,
      itemsDataType: undefined,
      isAnyType: false,
      isBinary: false,
      isBoolean: false,
      isByteArray: true,
      isCircularReference: false,
      isContainer: false,
      isDate: false,
      isDateTime: false,
      isDiscriminator: false,
      isDouble: false,
      isEmail: false,
      isEnum: false,
      isFile: false,
      isFloat: false,
      isFreeFormObject: false,
      isInherited: false,
      isInteger: false,
      isListContainer: false,
      isLong: false,
      isMapContainer: false,
      isModel: false,
      isNullable: false,
      isNumber: false,
      isNumeric: false,
      isPrimitiveType: true,
      isReadOnly: false,
      isSelfReference: false,
      isString: false,
      isUri: false,
      isUuid: false,
      isWriteOnly: false,
      isXmlAttribute: false,
      isXmlWrapped: false,
    },
    binary: {
      name: 'binary',
      baseName: 'binary',
      datatype: 'string',
      required: false,
      itemsDataType: undefined,
      isAnyType: false,
      isBinary: false,
      isBoolean: false,
      isByteArray: false,
      isCircularReference: false,
      isContainer: false,
      isDate: false,
      isDateTime: false,
      isDiscriminator: false,
      isDouble: false,
      isEmail: false,
      isEnum: false,
      isFile: false,
      isFloat: false,
      isFreeFormObject: false,
      isInherited: false,
      isInteger: false,
      isListContainer: false,
      isLong: false,
      isMapContainer: false,
      isModel: false,
      isNullable: false,
      isNumber: false,
      isNumeric: false,
      isPrimitiveType: true,
      isReadOnly: false,
      isSelfReference: false,
      isString: true,
      isUri: false,
      isUuid: false,
      isWriteOnly: false,
      isXmlAttribute: false,
      isXmlWrapped: false,
    },
  },
  baseNames: {
    id: 'id',
    name: 'name',
    count: 'count',
    rate: 'rate',
    ratio: 'ratio',
    enabled: 'enabled',
    created: 'created',
    timestamp: 'timestamp',
    bytes: 'bytes',
    binary: 'binary',
  },
};