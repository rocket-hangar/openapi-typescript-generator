/* eslint-disable */
/**
 * OpenAPI enums
 * Tests generation of enums with open opi
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

import { ExternalEnum } from './';

/**
 *
 * @interface ObjectWithEnums
 */
export interface ObjectWithEnums {
  /**
   *
   * @type {string}
   * @memberof ObjectWithEnums
   */
  enumInObject?: ObjectWithEnumsEnumInObjectEnum;

  /**
   *
   * @type {ExternalEnum}
   * @memberof ObjectWithEnums
   */
  externalEnum?: ExternalEnum;
}

export const ObjectWithEnumsModel: GenericModel = {
  classname: 'ObjectWithEnums',
  type: 'generic',
  parent: undefined,
  vars: {
    enumInObject: {
      name: 'enumInObject',
      baseName: 'enumInObject',
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
      isEnum: true,
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
    externalEnum: {
      name: 'externalEnum',
      baseName: 'externalEnum',
      datatype: 'ExternalEnum',
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
      isPrimitiveType: false,
      isReadOnly: false,
      isSelfReference: false,
      isString: false,
      isUri: false,
      isUuid: false,
      isWriteOnly: false,
      isXmlAttribute: false,
      isXmlWrapped: false,
    },
  },
  baseNames: {
    enumInObject: 'enumInObject',
    externalEnum: 'externalEnum',
  },
};

/**
 * @enum {string}
 */
export enum ObjectWithEnumsEnumInObjectEnum {
  Red = 'red',
  Blue = 'blue',
}
