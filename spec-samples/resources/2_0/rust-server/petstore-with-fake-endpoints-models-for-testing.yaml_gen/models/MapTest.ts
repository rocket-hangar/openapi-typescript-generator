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
 * @interface MapTest
 */
export interface MapTest {
  /**
   *
   * @type {{ [key: string]: { [key: string]: string; }; }}
   * @memberof MapTest
   */
  mapMapOfString?: { [key: string]: { [key: string]: string } };

  /**
   *
   * @type {{ [key: string]: { [key: string]: string; }; }}
   * @memberof MapTest
   */
  mapMapOfEnum?: { [key: string]: { [key: string]: string } };

  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof MapTest
   */
  mapOfEnumString?: { [key: string]: string };
}

export const MapTestModel: GenericModel = {
  classname: 'MapTest',
  type: 'generic',
  parent: undefined,
  vars: {
    mapMapOfString: {
      name: 'mapMapOfString',
      baseName: 'map_map_of_string',
      datatype: '{ [key: string]: { [key: string]: string; }; }',
      required: false,
      itemsDataType: '{ [key: string]: string; }',
      isAnyType: false,
      isBinary: false,
      isBoolean: false,
      isByteArray: false,
      isCircularReference: false,
      isContainer: true,
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
      isMapContainer: true,
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
    mapMapOfEnum: {
      name: 'mapMapOfEnum',
      baseName: 'map_map_of_enum',
      datatype: '{ [key: string]: { [key: string]: string; }; }',
      required: false,
      itemsDataType: '{ [key: string]: string; }',
      isAnyType: false,
      isBinary: false,
      isBoolean: false,
      isByteArray: false,
      isCircularReference: false,
      isContainer: true,
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
      isMapContainer: true,
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
    mapOfEnumString: {
      name: 'mapOfEnumString',
      baseName: 'map_of_enum_string',
      datatype: '{ [key: string]: string; }',
      required: false,
      itemsDataType: 'string',
      isAnyType: false,
      isBinary: false,
      isBoolean: false,
      isByteArray: false,
      isCircularReference: false,
      isContainer: true,
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
      isMapContainer: true,
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
  },
  baseNames: {
    mapMapOfString: 'map_map_of_string',
    mapMapOfEnum: 'map_map_of_enum',
    mapOfEnumString: 'map_of_enum_string',
  },
};

/**
 * @enum {string}
 */
export enum MapTestMapMapOfEnumEnum {
  UPPER = 'UPPER',
  Lower = 'lower',
}
/**
 * @enum {string}
 */
export enum MapTestMapOfEnumStringEnum {
  UPPER = 'UPPER',
  Lower = 'lower',
}