/* eslint-disable */
/**
 * Test Command model generation
 * Test Command model generation
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

import { PartyType } from './';

/**
 *
 * @interface PartyAllOf
 */
export interface PartyAllOf {
  /**
   *
   * @type {PartyType}
   * @memberof PartyAllOf
   */
  partyType: PartyType;

  /**
   *
   * @type {string}
   * @memberof PartyAllOf
   */
  taxIdNumber?: string;
}

export const PartyAllOfModel: GenericModel = {
  classname: 'PartyAllOf',
  type: 'generic',
  parent: undefined,
  discriminator: {
    propertyName: 'partyType',
    mappedModels: [
      { mappingName: 'Party', modelName: 'Party' },
      { mappingName: 'Contact', modelName: 'Contact' },
      { mappingName: 'contact', modelName: 'Contact' },
      { mappingName: 'Customer', modelName: 'Customer' },
      { mappingName: 'customer', modelName: 'Customer' },
      { mappingName: 'Person', modelName: 'Person' },
      { mappingName: 'person', modelName: 'Person' },
      { mappingName: 'Organization', modelName: 'Organization' },
      { mappingName: 'organization', modelName: 'Organization' },
    ],
  },
  vars: {
    partyType: [
      'partyType', // name
      'party_type', // baseName
      'PartyType', // datatype
      true, // required
      undefined, // itemsDataType
      false, // isAnyType
      false, // isBinary
      false, // isBoolean
      false, // isByteArray
      false, // isCircularReference
      false, // isContainer
      false, // isDate
      false, // isDateTime
      true, // isDiscriminator
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
      false, // isPrimitiveType
      false, // isReadOnly
      false, // isSelfReference
      false, // isString
      false, // isUri
      false, // isUuid
      false, // isWriteOnly
      false, // isXmlAttribute
      false, // isXmlWrapped
    ],
    taxIdNumber: [
      'taxIdNumber', // name
      'tax_id_number', // baseName
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
    partyType: 'party_type',
    taxIdNumber: 'tax_id_number',
  },
};
