/* eslint-disable */
/**
 * test
 * test
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

import { ChildSchemaAllOf, Parent } from './';

/**
 * A schema that does not have any special character.
 * @interface ChildSchema
 */
export interface ChildSchema extends Parent {
  /**
   *
   * @type {string}
   * @memberof ChildSchema
   */
  prop1?: string;
}

export const ChildSchemaModel: GenericModel = {
  classname: 'ChildSchema',
  type: 'generic',
  parent: 'Parent',
  vars: {
    prop1: [
      'prop1', // name
      'prop1', // baseName
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
    prop1: 'prop1',
  },
};
