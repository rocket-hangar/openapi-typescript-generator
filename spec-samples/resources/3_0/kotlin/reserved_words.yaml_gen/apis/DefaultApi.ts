/**
 * Test for Kotlin reserved words
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import type {
  UrlQueryInput,
  OperationConfiguration,
  RequestConfiguration,
  ResponseConfiguration,
  FetchParameters,
} from '@rocket-scripts/openapi';
import {
  pipe,
  collectionFormats,
  querystring,
  fetchRequest,
  APIRequestError,
  APIExceptionError,
} from '@rocket-scripts/openapi';
import { typeSerializer } from '../runtime';

/* eslint-disable */

export interface PingGetRequestParameters {
  as?: string;
  _break?: string;
  _class?: string;
  _continue?: string;
  _do?: string;
  _else?: string;
  _false?: string;
  _for?: string;
  fun?: string;
  _if?: string;
  _in?: string;
  _interface?: string;
  is?: string;
  _null?: string;
  object?: string;
  _package?: string;
  _return?: string;
  _super?: string;
  _this?: string;
  _throw?: string;
  _true?: string;
  _try?: string;
  typealias?: string;
  _typeof?: string;
  val?: string;
  _var?: string;
  when?: string;
  _while?: string;
}

/**
 * Pingy Ping
 * Ping
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const pingGetRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: PingGetRequestParameters,
): FetchParameters => {
  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  if (requestParameters.as !== undefined && requestParameters.as !== null) {
    headerParameters.set('as', String(requestParameters.as));
  }
  if (
    requestParameters._break !== undefined &&
    requestParameters._break !== null
  ) {
    headerParameters.set('break', String(requestParameters._break));
  }
  if (
    requestParameters._class !== undefined &&
    requestParameters._class !== null
  ) {
    headerParameters.set('class', String(requestParameters._class));
  }
  if (
    requestParameters._continue !== undefined &&
    requestParameters._continue !== null
  ) {
    headerParameters.set('continue', String(requestParameters._continue));
  }
  if (requestParameters._do !== undefined && requestParameters._do !== null) {
    headerParameters.set('do', String(requestParameters._do));
  }
  if (
    requestParameters._else !== undefined &&
    requestParameters._else !== null
  ) {
    headerParameters.set('else', String(requestParameters._else));
  }
  if (
    requestParameters._false !== undefined &&
    requestParameters._false !== null
  ) {
    headerParameters.set('false', String(requestParameters._false));
  }
  if (requestParameters._for !== undefined && requestParameters._for !== null) {
    headerParameters.set('for', String(requestParameters._for));
  }
  if (requestParameters.fun !== undefined && requestParameters.fun !== null) {
    headerParameters.set('fun', String(requestParameters.fun));
  }
  if (requestParameters._if !== undefined && requestParameters._if !== null) {
    headerParameters.set('if', String(requestParameters._if));
  }
  if (requestParameters._in !== undefined && requestParameters._in !== null) {
    headerParameters.set('in', String(requestParameters._in));
  }
  if (
    requestParameters._interface !== undefined &&
    requestParameters._interface !== null
  ) {
    headerParameters.set('interface', String(requestParameters._interface));
  }
  if (requestParameters.is !== undefined && requestParameters.is !== null) {
    headerParameters.set('is', String(requestParameters.is));
  }
  if (
    requestParameters._null !== undefined &&
    requestParameters._null !== null
  ) {
    headerParameters.set('null', String(requestParameters._null));
  }
  if (
    requestParameters.object !== undefined &&
    requestParameters.object !== null
  ) {
    headerParameters.set('object', String(requestParameters.object));
  }
  if (
    requestParameters._package !== undefined &&
    requestParameters._package !== null
  ) {
    headerParameters.set('package', String(requestParameters._package));
  }
  if (
    requestParameters._return !== undefined &&
    requestParameters._return !== null
  ) {
    headerParameters.set('return', String(requestParameters._return));
  }
  if (
    requestParameters._super !== undefined &&
    requestParameters._super !== null
  ) {
    headerParameters.set('super', String(requestParameters._super));
  }
  if (
    requestParameters._this !== undefined &&
    requestParameters._this !== null
  ) {
    headerParameters.set('this', String(requestParameters._this));
  }
  if (
    requestParameters._throw !== undefined &&
    requestParameters._throw !== null
  ) {
    headerParameters.set('throw', String(requestParameters._throw));
  }
  if (
    requestParameters._true !== undefined &&
    requestParameters._true !== null
  ) {
    headerParameters.set('true', String(requestParameters._true));
  }
  if (requestParameters._try !== undefined && requestParameters._try !== null) {
    headerParameters.set('try', String(requestParameters._try));
  }
  if (
    requestParameters.typealias !== undefined &&
    requestParameters.typealias !== null
  ) {
    headerParameters.set('typealias', String(requestParameters.typealias));
  }
  if (
    requestParameters._typeof !== undefined &&
    requestParameters._typeof !== null
  ) {
    headerParameters.set('typeof', String(requestParameters._typeof));
  }
  if (requestParameters.val !== undefined && requestParameters.val !== null) {
    headerParameters.set('val', String(requestParameters.val));
  }
  if (requestParameters._var !== undefined && requestParameters._var !== null) {
    headerParameters.set('var', String(requestParameters._var));
  }
  if (requestParameters.when !== undefined && requestParameters.when !== null) {
    headerParameters.set('when', String(requestParameters.when));
  }
  if (
    requestParameters._while !== undefined &&
    requestParameters._while !== null
  ) {
    headerParameters.set('while', String(requestParameters._while));
  }

  let url: string = `${basePath.replace(/\/+$/, '')}/ping`;
  if (queryParameters && Object.keys(queryParameters).length > 0) {
    url += '?' + querystringStringify(queryParameters);
  }

  const body = undefined;

  return {
    input: url,
    init: {
      method: 'GET',
      headers: headerParameters,
      credentials,
      body,
    },
  };
};

/**
 * Pingy Ping
 * Ping
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const pingGetResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<void> => {
  if (response.status >= 200 && response.status < 300) {
  } else {
    switch (response.status.toString()) {
      default:
        throw response;
    }
  }
};

/**
 * Pingy Ping
 * Ping
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function pingGet(
  requestParameters: PingGetRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    pingGetRequest(configuration),
    fetchRequest(configuration),
    pingGetResponse(configuration),
  )(requestParameters);
}
