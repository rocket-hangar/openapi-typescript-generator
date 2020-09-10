/**
 * test
 * test
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
import type { MySchemaNameCharacters } from '../models';
import { typeSerializer } from '../runtime';

/* eslint-disable */

export interface TestPostRequestParameters {
  mySchemaNameCharacters?: MySchemaNameCharacters;
}

/**
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const testPostRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: TestPostRequestParameters,
): FetchParameters => {
  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  headerParameters.set('Content-Type', 'application/json');

  let url: string = `${basePath.replace(/\/+$/, '')}/test`;
  if (queryParameters && Object.keys(queryParameters).length > 0) {
    url += '?' + querystringStringify(queryParameters);
  }

  const body = JSON.stringify(
    typeSerializer.toJsonObject('MySchemaNameCharacters')(
      requestParameters.mySchemaNameCharacters,
    ),
  );

  return {
    input: url,
    init: {
      method: 'POST',
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
export const testPostResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<MySchemaNameCharacters> => {
  if (response.status >= 200 && response.status < 300) {
    return response
      .json()
      .then(typeSerializer.toValueObject('MySchemaNameCharacters'));
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
export async function testPost(
  requestParameters: TestPostRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<MySchemaNameCharacters> {
  return pipe(
    testPostRequest(configuration),
    fetchRequest(configuration),
    testPostResponse(configuration),
  )(requestParameters);
}
