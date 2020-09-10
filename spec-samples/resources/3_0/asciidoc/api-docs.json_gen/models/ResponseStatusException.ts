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

import {
  ResponseStatusExceptionMostSpecificCause,
  ResponseStatusExceptionMostSpecificCauseStackTrace,
  ResponseStatusExceptionMostSpecificCauseSuppressed,
  ResponseStatusExceptionRootCause,
} from './';

/**
 *
 * @interface ResponseStatusException
 */
export interface ResponseStatusException {
  /**
   *
   * @type {ResponseStatusExceptionMostSpecificCause}
   * @memberof ResponseStatusException
   */
  mostSpecificCause?: ResponseStatusExceptionMostSpecificCause;

  /**
   *
   * @type {Array<ResponseStatusExceptionMostSpecificCauseStackTrace>}
   * @memberof ResponseStatusException
   */
  stackTrace?: Array<ResponseStatusExceptionMostSpecificCauseStackTrace>;

  /**
   *
   * @type {string}
   * @memberof ResponseStatusException
   */
  status?: ResponseStatusExceptionStatusEnum;

  /**
   *
   * @type {string}
   * @memberof ResponseStatusException
   */
  reason?: string;

  /**
   *
   * @type {string}
   * @memberof ResponseStatusException
   */
  message?: string;

  /**
   *
   * @type {ResponseStatusExceptionRootCause}
   * @memberof ResponseStatusException
   */
  rootCause?: ResponseStatusExceptionRootCause;

  /**
   *
   * @type {Array<ResponseStatusExceptionMostSpecificCauseSuppressed>}
   * @memberof ResponseStatusException
   */
  suppressed?: Array<ResponseStatusExceptionMostSpecificCauseSuppressed>;

  /**
   *
   * @type {string}
   * @memberof ResponseStatusException
   */
  localizedMessage?: string;
}

export const ResponseStatusExceptionModel: GenericModel = {
  classname: 'ResponseStatusException',
  type: 'generic',
  parent: undefined,
  vars: {
    mostSpecificCause: {
      name: 'mostSpecificCause',
      baseName: 'mostSpecificCause',
      datatype: 'ResponseStatusExceptionMostSpecificCause',
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
    stackTrace: {
      name: 'stackTrace',
      baseName: 'stackTrace',
      datatype:
        'Array&lt;ResponseStatusExceptionMostSpecificCauseStackTrace&gt;',
      required: false,
      itemsDataType: 'ResponseStatusExceptionMostSpecificCauseStackTrace',
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
    status: {
      name: 'status',
      baseName: 'status',
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
      isEnum: true,
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
    reason: {
      name: 'reason',
      baseName: 'reason',
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
    message: {
      name: 'message',
      baseName: 'message',
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
    rootCause: {
      name: 'rootCause',
      baseName: 'rootCause',
      datatype: 'ResponseStatusExceptionRootCause',
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
    suppressed: {
      name: 'suppressed',
      baseName: 'suppressed',
      datatype:
        'Array&lt;ResponseStatusExceptionMostSpecificCauseSuppressed&gt;',
      required: false,
      itemsDataType: 'ResponseStatusExceptionMostSpecificCauseSuppressed',
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
    localizedMessage: {
      name: 'localizedMessage',
      baseName: 'localizedMessage',
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
    mostSpecificCause: 'mostSpecificCause',
    stackTrace: 'stackTrace',
    status: 'status',
    reason: 'reason',
    message: 'message',
    rootCause: 'rootCause',
    suppressed: 'suppressed',
    localizedMessage: 'localizedMessage',
  },
};

/**
 * @enum {string}
 */
export enum ResponseStatusExceptionStatusEnum {
  _100CONTINUE = '100 CONTINUE',
  _101SWITCHINGPROTOCOLS = '101 SWITCHING_PROTOCOLS',
  _102PROCESSING = '102 PROCESSING',
  _103CHECKPOINT = '103 CHECKPOINT',
  _200OK = '200 OK',
  _201CREATED = '201 CREATED',
  _202ACCEPTED = '202 ACCEPTED',
  _203NONAUTHORITATIVEINFORMATION = '203 NON_AUTHORITATIVE_INFORMATION',
  _204NOCONTENT = '204 NO_CONTENT',
  _205RESETCONTENT = '205 RESET_CONTENT',
  _206PARTIALCONTENT = '206 PARTIAL_CONTENT',
  _207MULTISTATUS = '207 MULTI_STATUS',
  _208ALREADYREPORTED = '208 ALREADY_REPORTED',
  _226IMUSED = '226 IM_USED',
  _300MULTIPLECHOICES = '300 MULTIPLE_CHOICES',
  _301MOVEDPERMANENTLY = '301 MOVED_PERMANENTLY',
  _302FOUND = '302 FOUND',
  _302MOVEDTEMPORARILY = '302 MOVED_TEMPORARILY',
  _303SEEOTHER = '303 SEE_OTHER',
  _304NOTMODIFIED = '304 NOT_MODIFIED',
  _305USEPROXY = '305 USE_PROXY',
  _307TEMPORARYREDIRECT = '307 TEMPORARY_REDIRECT',
  _308PERMANENTREDIRECT = '308 PERMANENT_REDIRECT',
  _400BADREQUEST = '400 BAD_REQUEST',
  _401UNAUTHORIZED = '401 UNAUTHORIZED',
  _402PAYMENTREQUIRED = '402 PAYMENT_REQUIRED',
  _403FORBIDDEN = '403 FORBIDDEN',
  _404NOTFOUND = '404 NOT_FOUND',
  _405METHODNOTALLOWED = '405 METHOD_NOT_ALLOWED',
  _406NOTACCEPTABLE = '406 NOT_ACCEPTABLE',
  _407PROXYAUTHENTICATIONREQUIRED = '407 PROXY_AUTHENTICATION_REQUIRED',
  _408REQUESTTIMEOUT = '408 REQUEST_TIMEOUT',
  _409CONFLICT = '409 CONFLICT',
  _410GONE = '410 GONE',
  _411LENGTHREQUIRED = '411 LENGTH_REQUIRED',
  _412PRECONDITIONFAILED = '412 PRECONDITION_FAILED',
  _413PAYLOADTOOLARGE = '413 PAYLOAD_TOO_LARGE',
  _413REQUESTENTITYTOOLARGE = '413 REQUEST_ENTITY_TOO_LARGE',
  _414URITOOLONG = '414 URI_TOO_LONG',
  _414REQUESTURITOOLONG = '414 REQUEST_URI_TOO_LONG',
  _415UNSUPPORTEDMEDIATYPE = '415 UNSUPPORTED_MEDIA_TYPE',
  _416REQUESTEDRANGENOTSATISFIABLE = '416 REQUESTED_RANGE_NOT_SATISFIABLE',
  _417EXPECTATIONFAILED = '417 EXPECTATION_FAILED',
  _418IAMATEAPOT = '418 I_AM_A_TEAPOT',
  _419INSUFFICIENTSPACEONRESOURCE = '419 INSUFFICIENT_SPACE_ON_RESOURCE',
  _420METHODFAILURE = '420 METHOD_FAILURE',
  _421DESTINATIONLOCKED = '421 DESTINATION_LOCKED',
  _422UNPROCESSABLEENTITY = '422 UNPROCESSABLE_ENTITY',
  _423LOCKED = '423 LOCKED',
  _424FAILEDDEPENDENCY = '424 FAILED_DEPENDENCY',
  _425TOOEARLY = '425 TOO_EARLY',
  _426UPGRADEREQUIRED = '426 UPGRADE_REQUIRED',
  _428PRECONDITIONREQUIRED = '428 PRECONDITION_REQUIRED',
  _429TOOMANYREQUESTS = '429 TOO_MANY_REQUESTS',
  _431REQUESTHEADERFIELDSTOOLARGE = '431 REQUEST_HEADER_FIELDS_TOO_LARGE',
  _451UNAVAILABLEFORLEGALREASONS = '451 UNAVAILABLE_FOR_LEGAL_REASONS',
  _500INTERNALSERVERERROR = '500 INTERNAL_SERVER_ERROR',
  _501NOTIMPLEMENTED = '501 NOT_IMPLEMENTED',
  _502BADGATEWAY = '502 BAD_GATEWAY',
  _503SERVICEUNAVAILABLE = '503 SERVICE_UNAVAILABLE',
  _504GATEWAYTIMEOUT = '504 GATEWAY_TIMEOUT',
  _505HTTPVERSIONNOTSUPPORTED = '505 HTTP_VERSION_NOT_SUPPORTED',
  _506VARIANTALSONEGOTIATES = '506 VARIANT_ALSO_NEGOTIATES',
  _507INSUFFICIENTSTORAGE = '507 INSUFFICIENT_STORAGE',
  _508LOOPDETECTED = '508 LOOP_DETECTED',
  _509BANDWIDTHLIMITEXCEEDED = '509 BANDWIDTH_LIMIT_EXCEEDED',
  _510NOTEXTENDED = '510 NOT_EXTENDED',
  _511NETWORKAUTHENTICATIONREQUIRED = '511 NETWORK_AUTHENTICATION_REQUIRED',
}
