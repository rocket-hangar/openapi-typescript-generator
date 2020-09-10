/* eslint-disable */
/**
 * fruity
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

import { DiscOptionalTypeCorrect, FruitType } from './';

/**
 *
 * @interface ComposedDiscRequiredInconsistent
 */
export interface ComposedDiscRequiredInconsistent {
  /**
   *
   * @type {string}
   * @memberof ComposedDiscRequiredInconsistent
   */
  fruitType: string;
}

export const ComposedDiscRequiredInconsistentModel: GenericModel = {
  classname: 'ComposedDiscRequiredInconsistent',
  type: 'generic',
  parent: undefined,
  discriminator: {
    propertyName: 'fruitType',
    mappedModels: [],
  },
  vars: {
    fruitType: {
      name: 'fruitType',
      baseName: 'fruitType',
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
    fruitType: 'fruitType',
  },
};
