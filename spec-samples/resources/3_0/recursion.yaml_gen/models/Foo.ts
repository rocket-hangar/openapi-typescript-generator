/* eslint-disable */
/**
 * OpenAPI
 * Test
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

/**
 *
 * @interface Foo
 */
export interface Foo {
  /**
   *
   * @type {Foo}
   * @memberof Foo
   */
  foo?: Foo;
}

export const FooModel: GenericModel = {
  classname: 'Foo',
  type: 'generic',
  parent: undefined,
  vars: {
    foo: {
      name: 'foo',
      baseName: 'foo',
      datatype: 'Foo',
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
    foo: 'foo',
  },
};
