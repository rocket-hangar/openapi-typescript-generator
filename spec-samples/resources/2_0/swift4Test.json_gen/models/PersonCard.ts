/* eslint-disable */
/**
 * Swift 4 Test Schema
 * This is a test schema which exercises Swagger schema features for testing the swift4 language codegen module.
 *
 * The version of the OpenAPI document: 1.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

import { BaseCard, PersonCardAllOf } from './';

/**
 * This is a card object for a Person derived from BaseCard.
 * @interface PersonCard
 */
export interface PersonCard extends BaseCard {
  /**
   *
   * @type {string}
   * @memberof PersonCard
   */
  firstName?: string;

  /**
   *
   * @type {string}
   * @memberof PersonCard
   */
  lastName?: string;
}

export const PersonCardModel: GenericModel = {
  classname: 'PersonCard',
  type: 'generic',
  parent: 'BaseCard',
  vars: {
    firstName: [
      'firstName', // name
      'firstName', // baseName
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
    lastName: [
      'lastName', // name
      'lastName', // baseName
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
    firstName: 'firstName',
    lastName: 'lastName',
  },
};
