/* eslint-disable */
/**
 * fruity
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

import { FruitInlineInlineDiscAnyOf, FruitInlineInlineDiscAnyOf1 } from './';

/**
 *
 * @interface FruitInlineInlineDisc
 */
export interface FruitInlineInlineDisc {
  /**
   *
   * @type {number}
   * @memberof FruitInlineInlineDisc
   */
  seeds: number;

  /**
   *
   * @type {number}
   * @memberof FruitInlineInlineDisc
   */
  length: number;
}

export const FruitInlineInlineDiscModel: GenericModel = {
  classname: 'FruitInlineInlineDisc',
  type: 'generic',
  parent: undefined,
  discriminator: {
    propertyName: 'fruitType',
    mappedModels: [],
  },
  vars: {
    seeds: {
      name: 'seeds',
      baseName: 'seeds',
      datatype: 'number',
      required: true,
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
    length: {
      name: 'length',
      baseName: 'length',
      datatype: 'number',
      required: true,
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
  },
  baseNames: {
    seeds: 'seeds',
    length: 'length',
  },
};
