/**
 * OpenAPI Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at <a href=\"http://swagger.io\">http://swagger.io</a> or on irc.freenode.net, #swagger.  For this sample, you can use the api key \"special-key\" to test the authorization filters
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
  body?: Pet;
}
export interface DeletePetRequestParameters {
  petId: number;
  apiKey?: string;
}
export interface FindPetsByStatusRequestParameters {
  status?: Array<string>;
}
export interface FindPetsByTagsRequestParameters {
  tags?: Array<string>;
}
export interface GetPetByIdRequestParameters {
  petId: number;
}
export interface UpdatePetRequestParameters {
  body?: Pet;
}
export interface UpdatePetWithFormRequestParameters {
  petId: string;
  name?: string;
  status?: string;
}
export interface UploadFileRequestParameters {
  petId: number;
  additionalMetadata?: string;
  file?: Blob;
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

  let url: string = `${basePath.replace(/\/+$/, '')}/pet`;
  if (queryParameters && Object.keys(queryParameters).length > 0) {
    url += '?' + querystringStringify(queryParameters);
  }

  const body = JSON.stringify(
    typeSerializer.toJsonObject('Pet')(requestParameters.body),
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
 * Deletes a pet
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const deletePetRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: DeletePetRequestParameters,
): FetchParameters => {
  if (
    requestParameters.petId === null ||
    requestParameters.petId === undefined
  ) {
    throw new APIRequestError(
      `Required parameter requestParameters.petId was null or undefined when calling deletePet.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  if (
    requestParameters.apiKey !== undefined &&
    requestParameters.apiKey !== null
  ) {
    headerParameters.set('api_key', String(requestParameters.apiKey));
  }

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
      method: 'DELETE',
      headers: headerParameters,
      credentials,
      body,
    },
  };
};

/**
 * Deletes a pet
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const deletePetResponse = (
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
 * Deletes a pet
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function deletePet(
  requestParameters: DeletePetRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    deletePetRequest(configuration),
    fetchRequest(configuration),
    deletePetResponse(configuration),
  )(requestParameters);
}

/**
 * Multiple status values can be provided with comma separated strings
 * Finds Pets by status
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const findPetsByStatusRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: FindPetsByStatusRequestParameters,
): FetchParameters => {
  const queryParameters: UrlQueryInput = {};

  if (requestParameters.status) {
    queryParameters['status'] = requestParameters.status;
  }

  const headerParameters: Headers = new Headers(headers);

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

  let url: string = `${basePath.replace(/\/+$/, '')}/pet/findByStatus`;
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
 * Multiple status values can be provided with comma separated strings
 * Finds Pets by status
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const findPetsByStatusResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<Array<Pet>> => {
  if (response.status >= 200 && response.status < 300) {
    return response.json().then(typeSerializer.toValueObjectList('Pet'));
  } else {
    switch (response.status.toString()) {
      default:
        throw response;
    }
  }
};

/**
 * Multiple status values can be provided with comma separated strings
 * Finds Pets by status
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function findPetsByStatus(
  requestParameters: FindPetsByStatusRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<Array<Pet>> {
  return pipe(
    findPetsByStatusRequest(configuration),
    fetchRequest(configuration),
    findPetsByStatusResponse(configuration),
  )(requestParameters);
}

/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * Finds Pets by tags
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const findPetsByTagsRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: FindPetsByTagsRequestParameters,
): FetchParameters => {
  const queryParameters: UrlQueryInput = {};

  if (requestParameters.tags) {
    queryParameters['tags'] = requestParameters.tags;
  }

  const headerParameters: Headers = new Headers(headers);

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

  let url: string = `${basePath.replace(/\/+$/, '')}/pet/findByTags`;
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
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * Finds Pets by tags
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const findPetsByTagsResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<Array<Pet>> => {
  if (response.status >= 200 && response.status < 300) {
    return response.json().then(typeSerializer.toValueObjectList('Pet'));
  } else {
    switch (response.status.toString()) {
      default:
        throw response;
    }
  }
};

/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * Finds Pets by tags
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function findPetsByTags(
  requestParameters: FindPetsByTagsRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<Array<Pet>> {
  return pipe(
    findPetsByTagsRequest(configuration),
    fetchRequest(configuration),
    findPetsByTagsResponse(configuration),
  )(requestParameters);
}

/**
 * Returns a pet when ID < 10.  ID > 10 or nonintegers will simulate API error conditions
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

  if (apiKey) {
    headerParameters.set('api_key', apiKey('api_key')); // api_key authentication
  }

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
 * Returns a pet when ID < 10.  ID > 10 or nonintegers will simulate API error conditions
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
 * Returns a pet when ID < 10.  ID > 10 or nonintegers will simulate API error conditions
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

/**
 * Update an existing pet
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const updatePetRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: UpdatePetRequestParameters,
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

  let url: string = `${basePath.replace(/\/+$/, '')}/pet`;
  if (queryParameters && Object.keys(queryParameters).length > 0) {
    url += '?' + querystringStringify(queryParameters);
  }

  const body = JSON.stringify(
    typeSerializer.toJsonObject('Pet')(requestParameters.body),
  );

  return {
    input: url,
    init: {
      method: 'PUT',
      headers: headerParameters,
      credentials,
      body,
    },
  };
};

/**
 * Update an existing pet
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const updatePetResponse = (
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
 * Update an existing pet
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function updatePet(
  requestParameters: UpdatePetRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    updatePetRequest(configuration),
    fetchRequest(configuration),
    updatePetResponse(configuration),
  )(requestParameters);
}

/**
 * Updates a pet in the store with form data
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const updatePetWithFormRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: UpdatePetWithFormRequestParameters,
): FetchParameters => {
  if (
    requestParameters.petId === null ||
    requestParameters.petId === undefined
  ) {
    throw new APIRequestError(
      `Required parameter requestParameters.petId was null or undefined when calling updatePetWithForm.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

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

  let formParams: FormData | URLSearchParams;
  let useForm = false;

  if (useForm) {
    formParams = new FormData();
  } else {
    formParams = new URLSearchParams();
  }

  if (requestParameters.name !== undefined) {
    formParams.append('name', requestParameters.name as any);
  }
  if (requestParameters.status !== undefined) {
    formParams.append('status', requestParameters.status as any);
  }

  let url: string = `${basePath.replace(/\/+$/, '')}/pet/{petId}`.replace(
    `{${'petId'}}`,
    encodeURIComponent(String(requestParameters.petId)),
  );
  if (queryParameters && Object.keys(queryParameters).length > 0) {
    url += '?' + querystringStringify(queryParameters);
  }

  const body = formParams;

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
 * Updates a pet in the store with form data
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const updatePetWithFormResponse = (
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
 * Updates a pet in the store with form data
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function updatePetWithForm(
  requestParameters: UpdatePetWithFormRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    updatePetWithFormRequest(configuration),
    fetchRequest(configuration),
    updatePetWithFormResponse(configuration),
  )(requestParameters);
}

/**
 * uploads an image
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const uploadFileRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: UploadFileRequestParameters,
): FetchParameters => {
  if (
    requestParameters.petId === null ||
    requestParameters.petId === undefined
  ) {
    throw new APIRequestError(
      `Required parameter requestParameters.petId was null or undefined when calling uploadFile.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

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

  let formParams: FormData | URLSearchParams;
  let useForm = false;

  // use FormData to transmit files using content-type "multipart/form-data"
  useForm = [{ contentType: 'multipart/form-data' }].some(
    ({ contentType }) => contentType === 'multipart/form-data',
  );

  if (useForm) {
    formParams = new FormData();
  } else {
    formParams = new URLSearchParams();
  }

  if (requestParameters.additionalMetadata !== undefined) {
    formParams.append(
      'additionalMetadata',
      requestParameters.additionalMetadata as any,
    );
  }
  if (requestParameters.file !== undefined) {
    formParams.append('file', requestParameters.file as any);
  }

  let url: string = `${basePath.replace(
    /\/+$/,
    '',
  )}/pet/{petId}/uploadImage`.replace(
    `{${'petId'}}`,
    encodeURIComponent(String(requestParameters.petId)),
  );
  if (queryParameters && Object.keys(queryParameters).length > 0) {
    url += '?' + querystringStringify(queryParameters);
  }

  const body = formParams;

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
 * uploads an image
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const uploadFileResponse = (
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
 * uploads an image
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function uploadFile(
  requestParameters: UploadFileRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    uploadFileRequest(configuration),
    fetchRequest(configuration),
    uploadFileResponse(configuration),
  )(requestParameters);
}
