/**
 * OpenAPI Petstore
 * Used for verification of AuthorizationScope resolution issue
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
import type { Pet } from '../models';
import { typeSerializer } from '../runtime';

/* eslint-disable */

export interface AddPetRequestParameters {
  pet?: Pet;
}
export interface GetPetByIdRequestParameters {
  petId: number;
}

/**
 * Add a new pet to the store
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const addPetRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: AddPetRequestParameters,
): FetchParameters => {
  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  headerParameters.set('Content-Type', 'application/json');

  if (accessToken) {
    // oauth required
    if (typeof accessToken === 'function') {
      headerParameters.set(
        'Authorization',
        accessToken('petstore_auth', ['write:pets', 'read:pets']),
      );
    } else {
      headerParameters.set('Authorization', accessToken);
    }
  }

  if (accessToken) {
    // oauth required
    if (typeof accessToken === 'function') {
      headerParameters.set(
        'Authorization',
        accessToken('petstore_beta_auth', ['write:pets', 'read:pets']),
      );
    } else {
      headerParameters.set('Authorization', accessToken);
    }
  }

  let url: string = `${basePath.replace(/\/+$/, '')}/pet`;
  if (queryParameters && Object.keys(queryParameters).length > 0) {
    url += '?' + querystringStringify(queryParameters);
  }

  const body = JSON.stringify(
    typeSerializer.toJsonObject('Pet')(requestParameters.pet),
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
 * Add a new pet to the store
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const addPetResponse = (
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
 * Add a new pet to the store
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function addPet(
  requestParameters: AddPetRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    addPetRequest(configuration),
    fetchRequest(configuration),
    addPetResponse(configuration),
  )(requestParameters);
}

/**
 * Returns a single pet
 * Find pet by ID
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const getPetByIdRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: GetPetByIdRequestParameters,
): FetchParameters => {
  if (
    requestParameters.petId === null ||
    requestParameters.petId === undefined
  ) {
    throw new APIRequestError(
      `Required parameter requestParameters.petId was null or undefined when calling getPetById.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  if (accessToken) {
    // oauth required
    if (typeof accessToken === 'function') {
      headerParameters.set(
        'Authorization',
        accessToken('petstore_auth', ['read:pets']),
      );
    } else {
      headerParameters.set('Authorization', accessToken);
    }
  }

  if (accessToken) {
    // oauth required
    if (typeof accessToken === 'function') {
      headerParameters.set(
        'Authorization',
        accessToken('petstore_beta_auth', ['read:pets']),
      );
    } else {
      headerParameters.set('Authorization', accessToken);
    }
  }

  let url: string = `${basePath.replace(/\/+$/, '')}/pet/{petId}`.replace(
    `{${'petId'}}`,
    encodeURIComponent(String(requestParameters.petId)),
  );
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
 * Returns a single pet
 * Find pet by ID
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const getPetByIdResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<Pet> => {
  if (response.status >= 200 && response.status < 300) {
    return response.json().then(typeSerializer.toValueObject('Pet'));
  } else {
    switch (response.status.toString()) {
      default:
        throw response;
    }
  }
};

/**
 * Returns a single pet
 * Find pet by ID
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function getPetById(
  requestParameters: GetPetByIdRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<Pet> {
  return pipe(
    getPetByIdRequest(configuration),
    fetchRequest(configuration),
    getPetByIdResponse(configuration),
  )(requestParameters);
}
