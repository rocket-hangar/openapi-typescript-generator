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

import { Customer, CustomerType, OrganizationAllOf, PartyType } from './';

/**
 *
 * @interface Organization
 */
export interface Organization extends Customer {
  /**
   *
   * @type {string}
   * @memberof Organization
   */
  organizationName: string;
}

export const OrganizationModel: GenericModel = {
  classname: 'Organization',
  type: 'generic',
  parent: 'Customer',
  vars: {
    organizationName: {
      name: 'organizationName',
      baseName: 'organization_name',
      datatype: 'string',
      required: true,
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
    organizationName: 'organization_name',
  },
};