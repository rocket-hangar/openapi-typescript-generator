/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
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
import type { User } from '../models';
import { typeSerializer } from '../runtime';

/* eslint-disable */

export interface CreateUserRequestParameters {
  body: User;
}
export interface CreateUsersWithArrayInputRequestParameters {
  body: Array<User>;
}
export interface CreateUsersWithListInputRequestParameters {
  body: Array<User>;
}
export interface DeleteUserRequestParameters {
  username: string;
}
export interface GetUserByNameRequestParameters {
  username: string;
}
export interface LoginUserRequestParameters {
  username: string;
  password: string;
}
export interface UpdateUserRequestParameters {
  username: string;
  body: User;
}

/**
 * This can only be done by the logged in user.
 * Create user
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const createUserRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: CreateUserRequestParameters,
): FetchParameters => {
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new APIRequestError(
      `Required parameter requestParameters.body was null or undefined when calling createUser.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  headerParameters.set('Content-Type', 'application/json');

  let url: string = `${basePath.replace(/\/+$/, '')}/user`;
  if (queryParameters && Object.keys(queryParameters).length > 0) {
    url += '?' + querystringStringify(queryParameters);
  }

  const body = JSON.stringify(
    typeSerializer.toJsonObject('User')(requestParameters.body),
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
 * This can only be done by the logged in user.
 * Create user
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const createUserResponse = (
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
 * This can only be done by the logged in user.
 * Create user
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function createUser(
  requestParameters: CreateUserRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    createUserRequest(configuration),
    fetchRequest(configuration),
    createUserResponse(configuration),
  )(requestParameters);
}

/**
 * Creates list of users with given input array
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const createUsersWithArrayInputRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: CreateUsersWithArrayInputRequestParameters,
): FetchParameters => {
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new APIRequestError(
      `Required parameter requestParameters.body was null or undefined when calling createUsersWithArrayInput.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  headerParameters.set('Content-Type', 'application/json');

  let url: string = `${basePath.replace(/\/+$/, '')}/user/createWithArray`;
  if (queryParameters && Object.keys(queryParameters).length > 0) {
    url += '?' + querystringStringify(queryParameters);
  }

  const body = JSON.stringify(
    requestParameters.body?.map(typeSerializer.toJsonObject('User')),
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
 * Creates list of users with given input array
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const createUsersWithArrayInputResponse = (
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
 * Creates list of users with given input array
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function createUsersWithArrayInput(
  requestParameters: CreateUsersWithArrayInputRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    createUsersWithArrayInputRequest(configuration),
    fetchRequest(configuration),
    createUsersWithArrayInputResponse(configuration),
  )(requestParameters);
}

/**
 * Creates list of users with given input array
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const createUsersWithListInputRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: CreateUsersWithListInputRequestParameters,
): FetchParameters => {
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new APIRequestError(
      `Required parameter requestParameters.body was null or undefined when calling createUsersWithListInput.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  headerParameters.set('Content-Type', 'application/json');

  let url: string = `${basePath.replace(/\/+$/, '')}/user/createWithList`;
  if (queryParameters && Object.keys(queryParameters).length > 0) {
    url += '?' + querystringStringify(queryParameters);
  }

  const body = JSON.stringify(
    requestParameters.body?.map(typeSerializer.toJsonObject('User')),
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
 * Creates list of users with given input array
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const createUsersWithListInputResponse = (
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
 * Creates list of users with given input array
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function createUsersWithListInput(
  requestParameters: CreateUsersWithListInputRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    createUsersWithListInputRequest(configuration),
    fetchRequest(configuration),
    createUsersWithListInputResponse(configuration),
  )(requestParameters);
}

/**
 * This can only be done by the logged in user.
 * Delete user
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const deleteUserRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: DeleteUserRequestParameters,
): FetchParameters => {
  if (
    requestParameters.username === null ||
    requestParameters.username === undefined
  ) {
    throw new APIRequestError(
      `Required parameter requestParameters.username was null or undefined when calling deleteUser.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  let url: string = `${basePath.replace(/\/+$/, '')}/user/{username}`.replace(
    `{${'username'}}`,
    encodeURIComponent(String(requestParameters.username)),
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
 * This can only be done by the logged in user.
 * Delete user
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const deleteUserResponse = (
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
 * This can only be done by the logged in user.
 * Delete user
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function deleteUser(
  requestParameters: DeleteUserRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    deleteUserRequest(configuration),
    fetchRequest(configuration),
    deleteUserResponse(configuration),
  )(requestParameters);
}

/**
 * Get user by user name
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const getUserByNameRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: GetUserByNameRequestParameters,
): FetchParameters => {
  if (
    requestParameters.username === null ||
    requestParameters.username === undefined
  ) {
    throw new APIRequestError(
      `Required parameter requestParameters.username was null or undefined when calling getUserByName.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  let url: string = `${basePath.replace(/\/+$/, '')}/user/{username}`.replace(
    `{${'username'}}`,
    encodeURIComponent(String(requestParameters.username)),
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
 * Get user by user name
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const getUserByNameResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<User> => {
  if (response.status >= 200 && response.status < 300) {
    return response.json().then(typeSerializer.toValueObject('User'));
  } else {
    switch (response.status.toString()) {
      default:
        throw response;
    }
  }
};

/**
 * Get user by user name
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function getUserByName(
  requestParameters: GetUserByNameRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<User> {
  return pipe(
    getUserByNameRequest(configuration),
    fetchRequest(configuration),
    getUserByNameResponse(configuration),
  )(requestParameters);
}

/**
 * Logs user into the system
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const loginUserRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: LoginUserRequestParameters,
): FetchParameters => {
  if (
    requestParameters.username === null ||
    requestParameters.username === undefined
  ) {
    throw new APIRequestError(
      `Required parameter requestParameters.username was null or undefined when calling loginUser.`,
    );
  }
  if (
    requestParameters.password === null ||
    requestParameters.password === undefined
  ) {
    throw new APIRequestError(
      `Required parameter requestParameters.password was null or undefined when calling loginUser.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  if (requestParameters.username !== undefined) {
    queryParameters['username'] = requestParameters.username;
  }
  if (requestParameters.password !== undefined) {
    queryParameters['password'] = requestParameters.password;
  }

  const headerParameters: Headers = new Headers(headers);

  let url: string = `${basePath.replace(/\/+$/, '')}/user/login`;
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
 * Logs user into the system
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const loginUserResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<string> => {
  if (response.status >= 200 && response.status < 300) {
    return response.text().then(typeSerializer.toValueObject('string'));
  } else {
    switch (response.status.toString()) {
      default:
        throw response;
    }
  }
};

/**
 * Logs user into the system
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function loginUser(
  requestParameters: LoginUserRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<string> {
  return pipe(
    loginUserRequest(configuration),
    fetchRequest(configuration),
    loginUserResponse(configuration),
  )(requestParameters);
}

/**
 * Logs out current logged in user session
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const logoutUserRequest = ({
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

  let url: string = `${basePath.replace(/\/+$/, '')}/user/logout`;
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
 * Logs out current logged in user session
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const logoutUserResponse = (
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
 * Logs out current logged in user session
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function logoutUser(
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    logoutUserRequest(configuration),
    fetchRequest(configuration),
    logoutUserResponse(configuration),
  )();
}

/**
 * This can only be done by the logged in user.
 * Updated user
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const updateUserRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: UpdateUserRequestParameters,
): FetchParameters => {
  if (
    requestParameters.username === null ||
    requestParameters.username === undefined
  ) {
    throw new APIRequestError(
      `Required parameter requestParameters.username was null or undefined when calling updateUser.`,
    );
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new APIRequestError(
      `Required parameter requestParameters.body was null or undefined when calling updateUser.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  headerParameters.set('Content-Type', 'application/json');

  let url: string = `${basePath.replace(/\/+$/, '')}/user/{username}`.replace(
    `{${'username'}}`,
    encodeURIComponent(String(requestParameters.username)),
  );
  if (queryParameters && Object.keys(queryParameters).length > 0) {
    url += '?' + querystringStringify(queryParameters);
  }

  const body = JSON.stringify(
    typeSerializer.toJsonObject('User')(requestParameters.body),
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
 * This can only be done by the logged in user.
 * Updated user
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const updateUserResponse = (
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
 * This can only be done by the logged in user.
 * Updated user
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function updateUser(
  requestParameters: UpdateUserRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    updateUserRequest(configuration),
    fetchRequest(configuration),
    updateUserResponse(configuration),
  )(requestParameters);
}
