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
 * @interface Frequency
 */
export interface Frequency {
  /**
   *
   * @type {number}
   * @memberof Frequency
   */
  count?: number;

  /**
   *
   * @type {number}
   * @memberof Frequency
   */
  year?: number;
}

export const FrequencyModel: GenericModel = {
  classname: 'Frequency',
  type: 'generic',
  parent: undefined,
  vars: {
    count: [
      'count', // name
      'count', // baseName
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
    year: [
      'year', // name
      'year', // baseName
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
      true, // isInteger
      false, // isListContainer
      false, // isLong
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
    count: 'count',
    year: 'year',
  },
};
