/* eslint-disable */
/**
 * time@work rest api
 * internal rest api, used by time@work angular client
 *
 * The version of the OpenAPI document: 0.1
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { GenericModel } from '@rocket-scripts/openapi';

/**
 * 7 days array of working hours
 * @interface WorkHoursAssigned
 */
export interface WorkHoursAssigned {
  /**
   * working hours done for given task on this day
   * @type {number}
   * @memberof WorkHoursAssigned
   */
  workHours?: number;

  /**
   * current user is able to  change values for this day and task.
   * @type {boolean}
   * @memberof WorkHoursAssigned
   */
  readOnly?: boolean;
}

export const WorkHoursAssignedModel: GenericModel = {
  classname: 'WorkHoursAssigned',
  type: 'generic',
  parent: undefined,
  vars: {
    workHours: {
      name: 'workHours',
      baseName: 'workHours',
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
      isInteger: true,
      isListContainer: false,
      isLong: false,
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
    readOnly: {
      name: 'readOnly',
      baseName: 'readOnly',
      datatype: 'boolean',
      required: false,
      itemsDataType: undefined,
      isAnyType: false,
      isBinary: false,
      isBoolean: true,
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
      isString: false,
      isUri: false,
      isUuid: false,
      isWriteOnly: false,
      isXmlAttribute: false,
      isXmlWrapped: false,
    },
  },
  baseNames: {
    workHours: 'workHours',
    readOnly: 'readOnly',
  },
};
