/* eslint-disable */
/**
 * OpenAPI Petstore
 * Are creatures of the cosmos Rig Veda? Trillion! Made in the interiors of collapsing stars Apollonius of Perga, globular star cluster emerged into consciousness bits of moving fluff brain is the seed of intelligence citizens of distant epochs another world courage of our questions a mote of dust suspended in a sunbeam ship of the imagination, paroxysm of global death intelligent beings? Two ghostly white figures in coveralls and helmets are soflty dancing hearts of the stars brain is the seed of intelligence quasar, Drake Equation billions upon billions and billions upon billions upon billions upon billions upon billions upon billions upon billions!
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

/**
 *
 * @interface Category
 */
export interface Category {
  /**
   *
   * @type {number}
   * @memberof Category
   */
  id?: number;

  /**
   *
   * @type {string}
   * @memberof Category
   */
  name?: string;
}

export const CategoryModel: GenericModel = {
  classname: 'Category',
  type: 'generic',
  parent: undefined,
  vars: {
    id: {
      name: 'id',
      baseName: 'id',
      datatype: 'number',
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
      isLong: true,
      isMapContainer: false,
      isModel: false,
      isNullable: false,
      isNumber: false,
      isNumeric: true,
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
    name: {
      name: 'name',
      baseName: 'name',
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
    id: 'id',
    name: 'name',
  },
};