/* eslint-disable */
/**
 * MultipartFile test
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

/**
 *
 * @interface InlineObject
 */
export interface InlineObject {
  /**
   * Many files
   * @type {Array<Blob>}
   * @memberof InlineObject
   */
  files?: Array<Blob>;
}

export const InlineObjectModel: GenericModel = {
  classname: 'InlineObject',
  type: 'generic',
  parent: undefined,
  vars: {
    files: {
      name: 'files',
      baseName: 'files',
      datatype: 'Array&lt;Blob&gt;',
      required: false,
      itemsDataType: 'Blob',
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
      isXmlWrapped: false,
    },
  },
  baseNames: {
    files: 'files',
  },
};