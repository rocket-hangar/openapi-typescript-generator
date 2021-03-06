/* eslint-disable */
/**
 * ping test
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

/**
 * test any value inline
 * @interface AnyValueModelInline
 */
export interface AnyValueModelInline {
  /**
   *
   * @type {any}
   * @memberof AnyValueModelInline
   */
  anyValue?: any | null;

  /**
   * inline any value
   * @type {any}
   * @memberof AnyValueModelInline
   */
  anyValueWithDesc?: any | null;

  /**
   * inline any value nullable
   * @type {any}
   * @memberof AnyValueModelInline
   */
  anyValueNullable?: any | null;

  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof AnyValueModelInline
   */
  mapAnyValue?: { [key: string]: any };

  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof AnyValueModelInline
   */
  mapAnyValueWithDesc?: { [key: string]: any };

  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof AnyValueModelInline
   */
  mapAnyValueNullable?: { [key: string]: any };

  /**
   *
   * @type {Array<any>}
   * @memberof AnyValueModelInline
   */
  arrayAnyValue?: Array<any>;

  /**
   *
   * @type {Array<any>}
   * @memberof AnyValueModelInline
   */
  arrayAnyValueWithDesc?: Array<any>;

  /**
   *
   * @type {Array<any>}
   * @memberof AnyValueModelInline
   */
  arrayAnyValueNullable?: Array<any>;
}

export const AnyValueModelInlineModel: GenericModel = {
  classname: 'AnyValueModelInline',
  type: 'generic',
  parent: undefined,
  vars: {
    anyValue: [
      'anyValue', // name
      'any_value', // baseName
      'any', // datatype
      false, // required
      undefined, // itemsDataType
      true, // isAnyType
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
      true, // isNullable
      false, // isNumber
      false, // isNumeric
      true, // isPrimitiveType
      false, // isReadOnly
      false, // isSelfReference
      false, // isString
      false, // isUri
      false, // isUuid
      false, // isWriteOnly
      false, // isXmlAttribute
      false, // isXmlWrapped
    ],
    anyValueWithDesc: [
      'anyValueWithDesc', // name
      'any_value_with_desc', // baseName
      'any', // datatype
      false, // required
      undefined, // itemsDataType
      true, // isAnyType
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
      true, // isNullable
      false, // isNumber
      false, // isNumeric
      true, // isPrimitiveType
      false, // isReadOnly
      false, // isSelfReference
      false, // isString
      false, // isUri
      false, // isUuid
      false, // isWriteOnly
      false, // isXmlAttribute
      false, // isXmlWrapped
    ],
    anyValueNullable: [
      'anyValueNullable', // name
      'any_value_nullable', // baseName
      'any', // datatype
      false, // required
      undefined, // itemsDataType
      true, // isAnyType
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
      true, // isNullable
      false, // isNumber
      false, // isNumeric
      true, // isPrimitiveType
      false, // isReadOnly
      false, // isSelfReference
      false, // isString
      false, // isUri
      false, // isUuid
      false, // isWriteOnly
      false, // isXmlAttribute
      false, // isXmlWrapped
    ],
    mapAnyValue: [
      'mapAnyValue', // name
      'map_any_value', // baseName
      '{ [key: string]: any; }', // datatype
      false, // required
      'any', // itemsDataType
      false, // isAnyType
      false, // isBinary
      false, // isBoolean
      false, // isByteArray
      false, // isCircularReference
      true, // isContainer
      false, // isDate
      false, // isDateTime
      false, // isDiscriminator
      false, // isDouble
      false, // isEmail
      false, // isEnum
      false, // isFile
      false, // isFloat
      true, // isFreeFormObject
      false, // isInherited
      false, // isInteger
      false, // isListContainer
      false, // isLong
      true, // isMapContainer
      false, // isModel
      false, // isNullable
      false, // isNumber
      false, // isNumeric
      true, // isPrimitiveType
      false, // isReadOnly
      false, // isSelfReference
      false, // isString
      false, // isUri
      false, // isUuid
      false, // isWriteOnly
      false, // isXmlAttribute
      false, // isXmlWrapped
    ],
    mapAnyValueWithDesc: [
      'mapAnyValueWithDesc', // name
      'map_any_value_with_desc', // baseName
      '{ [key: string]: any; }', // datatype
      false, // required
      'any', // itemsDataType
      false, // isAnyType
      false, // isBinary
      false, // isBoolean
      false, // isByteArray
      false, // isCircularReference
      true, // isContainer
      false, // isDate
      false, // isDateTime
      false, // isDiscriminator
      false, // isDouble
      false, // isEmail
      false, // isEnum
      false, // isFile
      false, // isFloat
      true, // isFreeFormObject
      false, // isInherited
      false, // isInteger
      false, // isListContainer
      false, // isLong
      true, // isMapContainer
      false, // isModel
      false, // isNullable
      false, // isNumber
      false, // isNumeric
      true, // isPrimitiveType
      false, // isReadOnly
      false, // isSelfReference
      false, // isString
      false, // isUri
      false, // isUuid
      false, // isWriteOnly
      false, // isXmlAttribute
      false, // isXmlWrapped
    ],
    mapAnyValueNullable: [
      'mapAnyValueNullable', // name
      'map_any_value_nullable', // baseName
      '{ [key: string]: any; }', // datatype
      false, // required
      'any', // itemsDataType
      false, // isAnyType
      false, // isBinary
      false, // isBoolean
      false, // isByteArray
      false, // isCircularReference
      true, // isContainer
      false, // isDate
      false, // isDateTime
      false, // isDiscriminator
      false, // isDouble
      false, // isEmail
      false, // isEnum
      false, // isFile
      false, // isFloat
      true, // isFreeFormObject
      false, // isInherited
      false, // isInteger
      false, // isListContainer
      false, // isLong
      true, // isMapContainer
      false, // isModel
      false, // isNullable
      false, // isNumber
      false, // isNumeric
      true, // isPrimitiveType
      false, // isReadOnly
      false, // isSelfReference
      false, // isString
      false, // isUri
      false, // isUuid
      false, // isWriteOnly
      false, // isXmlAttribute
      false, // isXmlWrapped
    ],
    arrayAnyValue: [
      'arrayAnyValue', // name
      'array_any_value', // baseName
      'Array&lt;any&gt;', // datatype
      false, // required
      'any', // itemsDataType
      false, // isAnyType
      false, // isBinary
      false, // isBoolean
      false, // isByteArray
      false, // isCircularReference
      true, // isContainer
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
      true, // isListContainer
      false, // isLong
      false, // isMapContainer
      false, // isModel
      false, // isNullable
      false, // isNumber
      false, // isNumeric
      true, // isPrimitiveType
      false, // isReadOnly
      false, // isSelfReference
      false, // isString
      false, // isUri
      false, // isUuid
      false, // isWriteOnly
      false, // isXmlAttribute
      false, // isXmlWrapped
    ],
    arrayAnyValueWithDesc: [
      'arrayAnyValueWithDesc', // name
      'array_any_value_with_desc', // baseName
      'Array&lt;any&gt;', // datatype
      false, // required
      'any', // itemsDataType
      false, // isAnyType
      false, // isBinary
      false, // isBoolean
      false, // isByteArray
      false, // isCircularReference
      true, // isContainer
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
      true, // isListContainer
      false, // isLong
      false, // isMapContainer
      false, // isModel
      false, // isNullable
      false, // isNumber
      false, // isNumeric
      true, // isPrimitiveType
      false, // isReadOnly
      false, // isSelfReference
      false, // isString
      false, // isUri
      false, // isUuid
      false, // isWriteOnly
      false, // isXmlAttribute
      false, // isXmlWrapped
    ],
    arrayAnyValueNullable: [
      'arrayAnyValueNullable', // name
      'array_any_value_nullable', // baseName
      'Array&lt;any&gt;', // datatype
      false, // required
      'any', // itemsDataType
      false, // isAnyType
      false, // isBinary
      false, // isBoolean
      false, // isByteArray
      false, // isCircularReference
      true, // isContainer
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
      true, // isListContainer
      false, // isLong
      false, // isMapContainer
      false, // isModel
      false, // isNullable
      false, // isNumber
      false, // isNumeric
      true, // isPrimitiveType
      false, // isReadOnly
      false, // isSelfReference
      false, // isString
      false, // isUri
      false, // isUuid
      false, // isWriteOnly
      false, // isXmlAttribute
      false, // isXmlWrapped
    ],
  },
  baseNames: {
    anyValue: 'any_value',
    anyValueWithDesc: 'any_value_with_desc',
    anyValueNullable: 'any_value_nullable',
    mapAnyValue: 'map_any_value',
    mapAnyValueWithDesc: 'map_any_value_with_desc',
    mapAnyValueNullable: 'map_any_value_nullable',
    arrayAnyValue: 'array_any_value',
    arrayAnyValueWithDesc: 'array_any_value_with_desc',
    arrayAnyValueNullable: 'array_any_value_nullable',
  },
};
