/* eslint-disable */
/**
 * The Wordnik Public API
 * **Wordnik has an API, and you\'re invited.** The Wordnik API lets you request definitions, example sentences, spelling suggestions,  related words like synonyms and antonyms, phrases containing a given word, word  autocompletion, random words, words of the day, and much more
 *
 * The version of the OpenAPI document: 4.0.1
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

/**
 *
 * @interface WordListWord
 */
export interface WordListWord {
  /**
   *
   * @type {number}
   * @memberof WordListWord
   */
  id?: number;

  /**
   *
   * @type {string}
   * @memberof WordListWord
   */
  word?: string;

  /**
   *
   * @type {string}
   * @memberof WordListWord
   */
  username?: string;

  /**
   *
   * @type {number}
   * @memberof WordListWord
   */
  userId?: number;

  /**
   *
   * @type {Date}
   * @memberof WordListWord
   */
  createdAt?: Date;

  /**
   *
   * @type {number}
   * @memberof WordListWord
   */
  numberCommentsOnWord?: number;

  /**
   *
   * @type {number}
   * @memberof WordListWord
   */
  numberLists?: number;
}

export const WordListWordModel: GenericModel = {
  classname: 'WordListWord',
  type: 'generic',
  parent: undefined,
  vars: {
    id: [
      'id', // name
      'id', // baseName
      'number', // datatype
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
      true, // isLong
      false, // isMapContainer
      false, // isModel
      false, // isNullable
      false, // isNumber
      true, // isNumeric
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
    word: [
      'word', // name
      'word', // baseName
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
    username: [
      'username', // name
      'username', // baseName
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
    userId: [
      'userId', // name
      'userId', // baseName
      'number', // datatype
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
      true, // isLong
      false, // isMapContainer
      false, // isModel
      false, // isNullable
      false, // isNumber
      true, // isNumeric
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
    createdAt: [
      'createdAt', // name
      'createdAt', // baseName
      'Date', // datatype
      false, // required
      undefined, // itemsDataType
      false, // isAnyType
      false, // isBinary
      false, // isBoolean
      false, // isByteArray
      false, // isCircularReference
      false, // isContainer
      false, // isDate
      true, // isDateTime
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
      false, // isString
      false, // isUri
      false, // isUuid
      false, // isWriteOnly
      false, // isXmlAttribute
      false, // isXmlWrapped
    ],
    numberCommentsOnWord: [
      'numberCommentsOnWord', // name
      'numberCommentsOnWord', // baseName
      'number', // datatype
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
      true, // isLong
      false, // isMapContainer
      false, // isModel
      false, // isNullable
      false, // isNumber
      true, // isNumeric
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
    numberLists: [
      'numberLists', // name
      'numberLists', // baseName
      'number', // datatype
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
      true, // isLong
      false, // isMapContainer
      false, // isModel
      false, // isNullable
      false, // isNumber
      true, // isNumeric
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
    id: 'id',
    word: 'word',
    username: 'username',
    userId: 'userId',
    createdAt: 'createdAt',
    numberCommentsOnWord: 'numberCommentsOnWord',
    numberLists: 'numberLists',
  },
};
