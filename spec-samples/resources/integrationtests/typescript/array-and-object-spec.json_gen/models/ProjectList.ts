/* eslint-disable */
/**
 * Cupix API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.7.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

import { ProjectEntity } from './';

/**
 *
 * @interface ProjectList
 */
export interface ProjectList {
  /**
   *
   * @type {Array<ProjectEntity>}
   * @memberof ProjectList
   */
  contents: Array<ProjectEntity>;
}

export const ProjectListModel: GenericModel = {
  classname: 'ProjectList',
  type: 'generic',
  parent: undefined,
  vars: {
    contents: [
      'contents', // name
      'contents', // baseName
      'Array&lt;ProjectEntity&gt;', // datatype
      true, // required
      'ProjectEntity', // itemsDataType
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
      false, // isPrimitiveType
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
    contents: 'contents',
  },
};
