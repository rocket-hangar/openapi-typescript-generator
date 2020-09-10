/* eslint-disable */
/**
 * OAI Specification example for Polymorphism
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

/**
 *
 * @interface A
 */
export interface A {
  /**
   *
   * @type {string}
   * @memberof A
   */
  petType: string;
}

export const AModel: GenericModel = {
  classname: 'A',
  type: 'generic',
  parent: undefined,
  discriminator: {
    propertyName: 'petType',
    mappedModels: [{ mappingName: 'b', modelName: 'B' }],
  },
  vars: {
    petType: {
      name: 'petType',
      baseName: 'petType',
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
      isDiscriminator: true,
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
    petType: 'petType',
  },
};
