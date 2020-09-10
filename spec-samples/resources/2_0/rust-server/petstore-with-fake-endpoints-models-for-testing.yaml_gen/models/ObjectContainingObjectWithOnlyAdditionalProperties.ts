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
 * @interface ObjectContainingObjectWithOnlyAdditionalProperties
 */
export interface ObjectContainingObjectWithOnlyAdditionalProperties {
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ObjectContainingObjectWithOnlyAdditionalProperties
   */
  inner?: { [key: string]: string };
}

export const ObjectContainingObjectWithOnlyAdditionalPropertiesModel: GenericModel = {
  classname: 'ObjectContainingObjectWithOnlyAdditionalProperties',
  type: 'generic',
  parent: undefined,
  vars: {
    inner: {
      name: 'inner',
      baseName: 'inner',
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
  },
  baseNames: {
    inner: 'inner',
  },
};
