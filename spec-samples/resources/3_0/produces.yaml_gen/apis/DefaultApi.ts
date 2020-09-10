/**
 * OpenAPI Test
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
import type { InlineResponse200, LocationData } from '../models';
import { typeSerializer } from '../runtime';

/* eslint-disable */

/**
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const issue443Request = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (): FetchParameters => {
  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  let url: string = `${basePath.replace(/\/+$/, '')}/other/issue443`;
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
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const issue443Response = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<LocationData> => {
  if (response.status >= 200 && response.status < 300) {
    return response.json().then(typeSerializer.toValueObject('LocationData'));
  } else {
    switch (response.status.toString()) {
      case '0': // Unexpected error
        throw new APIExceptionError({
          exception: typeSerializer.toValueObject('string')(
            await response.json(),
          ),
          message: `Unexpected error`,
          response,
        });
      default:
        throw response;
    }
  }
};

/**
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function issue443(
  configuration: OperationConfiguration = {},
): Promise<LocationData> {
  return pipe(
    issue443Request(configuration),
    fetchRequest(configuration),
    issue443Response(configuration),
  )();
}

/**
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const pingJsonRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (): FetchParameters => {
  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  let url: string = `${basePath.replace(/\/+$/, '')}/ping/json`;
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
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const pingJsonResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<InlineResponse200> => {
  if (response.status >= 200 && response.status < 300) {
    return response
      .json()
      .then(typeSerializer.toValueObject('InlineResponse200'));
  } else {
    switch (response.status.toString()) {
      default:
        throw response;
    }
  }
};

/**
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function pingJson(
  configuration: OperationConfiguration = {},
): Promise<InlineResponse200> {
  return pipe(
    pingJsonRequest(configuration),
    fetchRequest(configuration),
    pingJsonResponse(configuration),
  )();
}

/**
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const pingTextRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (): FetchParameters => {
  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  let url: string = `${basePath.replace(/\/+$/, '')}/ping/text`;
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
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const pingTextResponse = (
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
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function pingText(
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    pingTextRequest(configuration),
    fetchRequest(configuration),
    pingTextResponse(configuration),
  )();
}