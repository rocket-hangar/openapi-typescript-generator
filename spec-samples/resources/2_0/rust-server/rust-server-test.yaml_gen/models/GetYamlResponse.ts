/* eslint-disable */
/**
 * rust-server-test
 * This spec is for testing rust-server-specific things
 *
 * The version of the OpenAPI document: 2.3.4
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

/**
 * structured response
 * @interface GetYamlResponse
 */
export interface GetYamlResponse {
  /**
   * Inner string
   * @type {string}
   * @memberof GetYamlResponse
   */
  value?: string;
}

export const GetYamlResponseModel: GenericModel = {
  classname: 'GetYamlResponse',
  type: 'generic',
  parent: undefined,
  vars: {
    value: {
      name: 'value',
      baseName: 'value',
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
    value: 'value',
  },
};
