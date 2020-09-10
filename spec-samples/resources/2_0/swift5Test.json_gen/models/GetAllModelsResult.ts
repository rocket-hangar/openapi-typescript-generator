/* eslint-disable */
/**
 * Swift 5 Test Schema
 * This is a test schema which exercises Swagger schema features for testing the swift5 language codegen module.
 *
 * The version of the OpenAPI document: 1.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

import { AllPrimitives, VariableNameTest } from './';

/**
 * Response object containing AllPrimitives object
 * @interface GetAllModelsResult
 */
export interface GetAllModelsResult {
  /**
   *
   * @type {Array<AllPrimitives>}
   * @memberof GetAllModelsResult
   */
  myPrimitiveArray?: Array<AllPrimitives>;

  /**
   *
   * @type {AllPrimitives}
   * @memberof GetAllModelsResult
   */
  myPrimitive?: AllPrimitives;

  /**
   *
   * @type {VariableNameTest}
   * @memberof GetAllModelsResult
   */
  myVariableNameTest?: VariableNameTest;
}

export const GetAllModelsResultModel: GenericModel = {
  classname: 'GetAllModelsResult',
  type: 'generic',
  parent: undefined,
  vars: {
    myPrimitiveArray: {
      name: 'myPrimitiveArray',
      baseName: 'myPrimitiveArray',
      datatype: 'Array&lt;AllPrimitives&gt;',
      required: false,
      itemsDataType: 'AllPrimitives',
      isAnyType: false,
      isBinary: false,
      isBoolean: false,
      isByteArray: false,
      isCircularReference: false,
      isContainer: true,
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
      isListContainer: true,
      isLong: false,
      isMapContainer: false,
      isModel: false,
      isNullable: false,
      isNumber: false,
      isNumeric: false,
      isPrimitiveType: false,
      isReadOnly: false,
      isSelfReference: false,
      isString: false,
      isUri: false,
      isUuid: false,
      isWriteOnly: false,
      isXmlAttribute: false,
      isXmlWrapped: false,
    },
    myPrimitive: {
      name: 'myPrimitive',
      baseName: 'myPrimitive',
      datatype: 'AllPrimitives',
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
      isModel: true,
      isNullable: false,
      isNumber: false,
      isNumeric: false,
      isPrimitiveType: false,
      isReadOnly: false,
      isSelfReference: false,
      isString: false,
      isUri: false,
      isUuid: false,
      isWriteOnly: false,
      isXmlAttribute: false,
      isXmlWrapped: false,
    },
    myVariableNameTest: {
      name: 'myVariableNameTest',
      baseName: 'myVariableNameTest',
      datatype: 'VariableNameTest',
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
      isModel: true,
      isNullable: false,
      isNumber: false,
      isNumeric: false,
      isPrimitiveType: false,
      isReadOnly: false,
      isSelfReference: false,
      isString: false,
      isUri: false,
      isUuid: false,
      isWriteOnly: false,
      isXmlAttribute: false,
      isXmlWrapped: false,
    },
  },
  baseNames: {
    myPrimitiveArray: 'myPrimitiveArray',
    myPrimitive: 'myPrimitive',
    myVariableNameTest: 'myVariableNameTest',
  },
};
