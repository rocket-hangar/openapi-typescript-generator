/**
 * Cupix API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.7.0
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
import type { ProjectEntity, ProjectList } from '../models';
import { typeSerializer } from '../runtime';

/* eslint-disable */

export interface CreateProjectRequestParameters {
  name?: string;
  address?: string;
  longitude?: number;
  latitude?: number;
  meta?: string;
}
export interface DeleteProjectByIdRequestParameters {
  id: number;
}
export interface GetProjectByIdRequestParameters {
  id: number;
}
export interface GetProjectListRequestParameters {
  page?: number;
  perPage?: number;
  kind?: GetProjectListKindEnum;
  q?: string;
  filter?: string;
  latitude?: number;
  longitude?: number;
  scope?: number;
}
export interface UpdateProjectRequestParameters {
  id: number;
  name?: string;
  address?: string;
  longitude?: number;
  latitude?: number;
  meta?: string;
  thumbnail?: Blob;
}

/**
 * Creates an empty Project
 * Create a Project
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const createProjectRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: CreateProjectRequestParameters,
): FetchParameters => {
  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

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
  if (requestParameters.address !== undefined) {
    formParams.append('address', requestParameters.address as any);
  }
  if (requestParameters.longitude !== undefined) {
    formParams.append('longitude', requestParameters.longitude as any);
  }
  if (requestParameters.latitude !== undefined) {
    formParams.append('latitude', requestParameters.latitude as any);
  }
  if (requestParameters.meta !== undefined) {
    formParams.append('meta', requestParameters.meta as any);
  }

  let url: string = `${basePath.replace(/\/+$/, '')}/projects`;
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
 * Creates an empty Project
 * Create a Project
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const createProjectResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<ProjectEntity> => {
  if (response.status >= 200 && response.status < 300) {
    return response.json().then(typeSerializer.toValueObject('ProjectEntity'));
  } else {
    switch (response.status.toString()) {
      case '400': // Bad Request
        throw new APIExceptionError({
          exception: typeSerializer.toValueObject('Error')(
            await response.json(),
          ),
          message: `Bad Request`,
          response,
        });
      default:
        throw response;
    }
  }
};

/**
 * Creates an empty Project
 * Create a Project
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function createProject(
  requestParameters: CreateProjectRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<ProjectEntity> {
  return pipe(
    createProjectRequest(configuration),
    fetchRequest(configuration),
    createProjectResponse(configuration),
  )(requestParameters);
}

/**
 * Returns a Project JSON object
 * Delete a Project
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const deleteProjectByIdRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: DeleteProjectByIdRequestParameters,
): FetchParameters => {
  if (requestParameters.id === null || requestParameters.id === undefined) {
    throw new APIRequestError(
      `Required parameter requestParameters.id was null or undefined when calling deleteProjectById.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  let url: string = `${basePath.replace(/\/+$/, '')}/projects/{id}`.replace(
    `{${'id'}}`,
    encodeURIComponent(String(requestParameters.id)),
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
 * Returns a Project JSON object
 * Delete a Project
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const deleteProjectByIdResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<void> => {
  if (response.status >= 200 && response.status < 300) {
  } else {
    switch (response.status.toString()) {
      case '400': // Bad Request
        throw new APIExceptionError({
          exception: typeSerializer.toValueObject('Error')(
            await response.json(),
          ),
          message: `Bad Request`,
          response,
        });
      default:
        throw response;
    }
  }
};

/**
 * Returns a Project JSON object
 * Delete a Project
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function deleteProjectById(
  requestParameters: DeleteProjectByIdRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    deleteProjectByIdRequest(configuration),
    fetchRequest(configuration),
    deleteProjectByIdResponse(configuration),
  )(requestParameters);
}

/**
 * Returns a Project JSON object
 * Get a Project
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const getProjectByIdRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: GetProjectByIdRequestParameters,
): FetchParameters => {
  if (requestParameters.id === null || requestParameters.id === undefined) {
    throw new APIRequestError(
      `Required parameter requestParameters.id was null or undefined when calling getProjectById.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  let url: string = `${basePath.replace(/\/+$/, '')}/projects/{id}`.replace(
    `{${'id'}}`,
    encodeURIComponent(String(requestParameters.id)),
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
 * Returns a Project JSON object
 * Get a Project
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const getProjectByIdResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<ProjectEntity> => {
  if (response.status >= 200 && response.status < 300) {
    return response.json().then(typeSerializer.toValueObject('ProjectEntity'));
  } else {
    switch (response.status.toString()) {
      case '400': // Bad Request
        throw new APIExceptionError({
          exception: typeSerializer.toValueObject('Error')(
            await response.json(),
          ),
          message: `Bad Request`,
          response,
        });
      default:
        throw response;
    }
  }
};

/**
 * Returns a Project JSON object
 * Get a Project
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function getProjectById(
  requestParameters: GetProjectByIdRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<ProjectEntity> {
  return pipe(
    getProjectByIdRequest(configuration),
    fetchRequest(configuration),
    getProjectByIdResponse(configuration),
  )(requestParameters);
}

/**
 * Returns a Project JSON object
 * Get project list
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const getProjectListRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: GetProjectListRequestParameters,
): FetchParameters => {
  const queryParameters: UrlQueryInput = {};

  if (requestParameters.page !== undefined) {
    queryParameters['page'] = requestParameters.page;
  }
  if (requestParameters.perPage !== undefined) {
    queryParameters['per_page'] = requestParameters.perPage;
  }
  if (requestParameters.kind !== undefined) {
    queryParameters['kind'] = requestParameters.kind;
  }
  if (requestParameters.q !== undefined) {
    queryParameters['q'] = requestParameters.q;
  }
  if (requestParameters.filter !== undefined) {
    queryParameters['filter'] = requestParameters.filter;
  }
  if (requestParameters.latitude !== undefined) {
    queryParameters['latitude'] = requestParameters.latitude;
  }
  if (requestParameters.longitude !== undefined) {
    queryParameters['longitude'] = requestParameters.longitude;
  }
  if (requestParameters.scope !== undefined) {
    queryParameters['scope'] = requestParameters.scope;
  }

  const headerParameters: Headers = new Headers(headers);

  let url: string = `${basePath.replace(/\/+$/, '')}/projects`;
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
 * Returns a Project JSON object
 * Get project list
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const getProjectListResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<ProjectList> => {
  if (response.status >= 200 && response.status < 300) {
    return response.json().then(typeSerializer.toValueObject('ProjectList'));
  } else {
    switch (response.status.toString()) {
      case '400': // Bad Request
        throw new APIExceptionError({
          exception: typeSerializer.toValueObject('Error')(
            await response.json(),
          ),
          message: `Bad Request`,
          response,
        });
      default:
        throw response;
    }
  }
};

/**
 * Returns a Project JSON object
 * Get project list
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function getProjectList(
  requestParameters: GetProjectListRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<ProjectList> {
  return pipe(
    getProjectListRequest(configuration),
    fetchRequest(configuration),
    getProjectListResponse(configuration),
  )(requestParameters);
}

/**
 * Update project
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const updateProjectRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: UpdateProjectRequestParameters,
): FetchParameters => {
  if (requestParameters.id === null || requestParameters.id === undefined) {
    throw new APIRequestError(
      `Required parameter requestParameters.id was null or undefined when calling updateProject.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

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

  if (requestParameters.name !== undefined) {
    formParams.append('name', requestParameters.name as any);
  }
  if (requestParameters.address !== undefined) {
    formParams.append('address', requestParameters.address as any);
  }
  if (requestParameters.longitude !== undefined) {
    formParams.append('longitude', requestParameters.longitude as any);
  }
  if (requestParameters.latitude !== undefined) {
    formParams.append('latitude', requestParameters.latitude as any);
  }
  if (requestParameters.meta !== undefined) {
    formParams.append('meta', requestParameters.meta as any);
  }
  if (requestParameters.thumbnail !== undefined) {
    formParams.append('thumbnail', requestParameters.thumbnail as any);
  }

  let url: string = `${basePath.replace(/\/+$/, '')}/projects/{id}`.replace(
    `{${'id'}}`,
    encodeURIComponent(String(requestParameters.id)),
  );
  if (queryParameters && Object.keys(queryParameters).length > 0) {
    url += '?' + querystringStringify(queryParameters);
  }

  const body = formParams;

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
 * Update project
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const updateProjectResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<ProjectEntity> => {
  if (response.status >= 200 && response.status < 300) {
    return response.json().then(typeSerializer.toValueObject('ProjectEntity'));
  } else {
    switch (response.status.toString()) {
      case '400': // Bad Request
        throw new APIExceptionError({
          exception: typeSerializer.toValueObject('Error')(
            await response.json(),
          ),
          message: `Bad Request`,
          response,
        });
      default:
        throw response;
    }
  }
};

/**
 * Update project
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function updateProject(
  requestParameters: UpdateProjectRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<ProjectEntity> {
  return pipe(
    updateProjectRequest(configuration),
    fetchRequest(configuration),
    updateProjectResponse(configuration),
  )(requestParameters);
}

/**
 * @export
 * @enum {string}
 */
export enum GetProjectListKindEnum {
  MyModels = 'my_models',
  Published = 'published',
  Location = 'location',
}
