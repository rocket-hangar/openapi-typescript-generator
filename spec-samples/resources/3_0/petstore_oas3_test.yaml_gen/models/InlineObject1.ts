/* eslint-disable */
/**
 * OpenAPI Petstore
 * A test spec based on the Petstore spec with OAS3 related test cases such as nullable
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

/**
 *
 * @interface InlineObject1
 */
export interface InlineObject1 {
  /**
   * Additional data to pass to server
   * @type {string}
   * @memberof InlineObject1
   */
  additionalMetadata?: string;

  /**
   * file to upload
   * @type {Blob}
   * @memberof InlineObject1
   */
  file?: Blob;
}

export const InlineObject1Model: GenericModel = {
  classname: 'InlineObject1',
  type: 'generic',
  parent: undefined,
  vars: {
    additionalMetadata: [
      'additionalMetadata', // name
      'additionalMetadata', // baseName
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
    file: [
      'file', // name
      'file', // baseName
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
  },
  baseNames: {
    additionalMetadata: 'additionalMetadata',
    file: 'file',
  },
};
