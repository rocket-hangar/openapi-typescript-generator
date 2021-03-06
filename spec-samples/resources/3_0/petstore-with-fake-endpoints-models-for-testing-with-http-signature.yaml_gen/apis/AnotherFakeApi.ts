/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
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
import type {
  Client,
} from '../models';
import { typeSerializer } from '../runtime';

/* eslint-disable */

export interface 123testSpecialTagsRequestParameters {
  client: Client;
}


/**
 * To test special tags and operation ID starting with number
 * To test special tags
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const _123testSpecialTagsRequest = ({
    basePath = '',
    querystringStringify = querystring,
    username,
    password,
    apiKey,
    accessToken,
    headers,
    credentials,
  }: RequestConfiguration = {}) =>
  (requestParameters: 123testSpecialTagsRequestParameters): FetchParameters => {
  if (requestParameters.client === null || requestParameters.client === undefined) {
    throw new APIRequestError(`Required parameter requestParameters.client was null or undefined when calling _123testSpecialTags.`);
  }

  const queryParameters: UrlQueryInput = {};


  const headerParameters: Headers = new Headers(headers);

  headerParameters.set('Content-Type', 'application/json');




  let url: string = `${basePath.replace(/\/+$/, '')}/another-fake/dummy`;
  if (queryParameters && Object.keys(queryParameters).length > 0) {
    url += '?' + querystringStringify(queryParameters);
  }

  const body = JSON.stringify(typeSerializer.toJsonObject('Client')(requestParameters.client));
  

  return {
    input: url,
    init: {
      method: 'PATCH',
      headers: headerParameters,
      credentials,
      body,
    },
  };
}

/**
 * To test special tags and operation ID starting with number
 * To test special tags
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const _123testSpecialTagsResponse = (configuration: ResponseConfiguration = {}) => async (response: Response): Promise<Client> => {
  if (response.status >= 200 && response.status < 300) {
    return response.json().then(typeSerializer.toValueObject('Client'));
  } else {
    switch (response.status.toString()) {
      default:
        throw response;
    }
  }
}

/**
 * To test special tags and operation ID starting with number
 * To test special tags
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function _123testSpecialTags(requestParameters: 123testSpecialTagsRequestParameters, configuration: OperationConfiguration = {}): Promise<Client> {
  return pipe(
    _123testSpecialTagsRequest(configuration),
    fetchRequest(configuration),
    _123testSpecialTagsResponse(configuration),
  )(requestParameters);
}

