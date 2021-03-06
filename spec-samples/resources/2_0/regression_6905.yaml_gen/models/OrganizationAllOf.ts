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

/**
 *
 * @interface OrganizationAllOf
 */
export interface OrganizationAllOf {
  /**
   *
   * @type {string}
   * @memberof OrganizationAllOf
   */
  organizationName: string;
}

export const OrganizationAllOfModel: GenericModel = {
  classname: 'OrganizationAllOf',
  type: 'generic',
  parent: undefined,
  vars: {
    organizationName: [
      'organizationName', // name
      'organization_name', // baseName
      'string', // datatype
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
    organizationName: 'organization_name',
  },
};
