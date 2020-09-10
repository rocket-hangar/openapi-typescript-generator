/* eslint-disable */
/**
 * My title
 * API under test
 *
 * The version of the OpenAPI document: 1.0.7
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

/**
 * An XML object
 * @interface DuplicateXmlObject
 */
export interface DuplicateXmlObject {
  /**
   *
   * @type {string}
   * @memberof DuplicateXmlObject
   */
  innerString?: string;

  /**
   *
   * @type {Array<string>}
   * @memberof DuplicateXmlObject
   */
  innerArray: Array<string>;
}

export const DuplicateXmlObjectModel: GenericModel = {
  classname: 'DuplicateXmlObject',
  type: 'generic',
  parent: undefined,
  vars: {
    innerString: {
      name: 'innerString',
      baseName: 'inner_string',
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
    innerArray: {
      name: 'innerArray',
      baseName: 'inner_array',
      datatype: 'Array&lt;string&gt;',
      required: true,
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
      isListContainer: true,
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
      isXmlWrapped: true,
    },
  },
  baseNames: {
    innerString: 'inner_string',
    innerArray: 'inner_array',
  },
};