/* eslint-disable */
/**
 * Simple API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

/**
 *
 * @interface CompositionOfSimpleCompositionAllOf
 */
export interface CompositionOfSimpleCompositionAllOf {
  /**
   *
   * @type {string}
   * @memberof CompositionOfSimpleCompositionAllOf
   */
  compositionOfSimpleCompositionProp?: string;
}

export const CompositionOfSimpleCompositionAllOfModel: GenericModel = {
  classname: 'CompositionOfSimpleCompositionAllOf',
  type: 'generic',
  parent: undefined,
  vars: {
    compositionOfSimpleCompositionProp: [
      'compositionOfSimpleCompositionProp', // name
      'compositionOfSimpleCompositionProp', // baseName
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
  },
  baseNames: {
    compositionOfSimpleCompositionProp: 'compositionOfSimpleCompositionProp',
  },
};
