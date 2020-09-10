/**
 * rust-server-test
 * This spec is for testing rust-server-specific things
 *
 * The version of the OpenAPI document: 2.3.4
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
import type { AllOfObject, GetYamlResponse, InlineObject } from '../models';
import { typeSerializer } from '../runtime';

/* eslint-disable */

export interface DummyPutRequestParameters {
  nestedResponse: InlineObject;
}
export interface HtmlPostRequestParameters {
  body: string;
}
export interface PostYamlRequestParameters {
  value: string;
}
export interface SoloObjectPostRequestParameters {
  value: object;
}

/**
 * Test getting an object which uses allOf
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const allOfGetRequest = ({
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

  let url: string = `${basePath.replace(/\/+$/, '')}/allOf`;
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
 * Test getting an object which uses allOf
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const allOfGetResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<AllOfObject> => {
  if (response.status >= 200 && response.status < 300) {
    return response.json().then(typeSerializer.toValueObject('AllOfObject'));
  } else {
    switch (response.status.toString()) {
      default:
        throw response;
    }
  }
};

/**
 * Test getting an object which uses allOf
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function allOfGet(
  configuration: OperationConfiguration = {},
): Promise<AllOfObject> {
  return pipe(
    allOfGetRequest(configuration),
    fetchRequest(configuration),
    allOfGetResponse(configuration),
  )();
}

/**
 * A dummy endpoint to make the spec valid.
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const dummyGetRequest = ({
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

  let url: string = `${basePath.replace(/\/+$/, '')}/dummy`;
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
 * A dummy endpoint to make the spec valid.
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const dummyGetResponse = (
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
 * A dummy endpoint to make the spec valid.
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function dummyGet(
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    dummyGetRequest(configuration),
    fetchRequest(configuration),
    dummyGetResponse(configuration),
  )();
}

/**
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const dummyPutRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: DummyPutRequestParameters,
): FetchParameters => {
  if (
    requestParameters.nestedResponse === null ||
    requestParameters.nestedResponse === undefined
  ) {
    throw new APIRequestError(
      `Required parameter requestParameters.nestedResponse was null or undefined when calling dummyPut.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  headerParameters.set('Content-Type', 'application/json');

  let url: string = `${basePath.replace(/\/+$/, '')}/dummy`;
  if (queryParameters && Object.keys(queryParameters).length > 0) {
    url += '?' + querystringStringify(queryParameters);
  }

  const body = JSON.stringify(
    typeSerializer.toJsonObject('InlineObject')(
      requestParameters.nestedResponse,
    ),
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
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const dummyPutResponse = (
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
export async function dummyPut(
  requestParameters: DummyPutRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    dummyPutRequest(configuration),
    fetchRequest(configuration),
    dummyPutResponse(configuration),
  )(requestParameters);
}

/**
 * Get a file
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const fileResponseGetRequest = ({
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

  let url: string = `${basePath.replace(/\/+$/, '')}/file_response`;
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
 * Get a file
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const fileResponseGetResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<Blob> => {
  if (response.status >= 200 && response.status < 300) {
    return response.blob();
  } else {
    switch (response.status.toString()) {
      default:
        throw response;
    }
  }
};

/**
 * Get a file
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function fileResponseGet(
  configuration: OperationConfiguration = {},
): Promise<Blob> {
  return pipe(
    fileResponseGetRequest(configuration),
    fetchRequest(configuration),
    fileResponseGetResponse(configuration),
  )();
}

/**
 * Test returning arbitrary structured YAML
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const getStructuredYamlRequest = ({
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

  let url: string = `${basePath.replace(/\/+$/, '')}/get-structured-yaml`;
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
 * Test returning arbitrary structured YAML
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const getStructuredYamlResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<GetYamlResponse> => {
  if (response.status >= 200 && response.status < 300) {
    return response
      .json()
      .then(typeSerializer.toValueObject('GetYamlResponse'));
  } else {
    switch (response.status.toString()) {
      default:
        throw response;
    }
  }
};

/**
 * Test returning arbitrary structured YAML
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function getStructuredYaml(
  configuration: OperationConfiguration = {},
): Promise<GetYamlResponse> {
  return pipe(
    getStructuredYamlRequest(configuration),
    fetchRequest(configuration),
    getStructuredYamlResponse(configuration),
  )();
}

/**
 * Test HTML handling
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const htmlPostRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: HtmlPostRequestParameters,
): FetchParameters => {
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new APIRequestError(
      `Required parameter requestParameters.body was null or undefined when calling htmlPost.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  headerParameters.set('Content-Type', 'text/html');

  let url: string = `${basePath.replace(/\/+$/, '')}/html`;
  if (queryParameters && Object.keys(queryParameters).length > 0) {
    url += '?' + querystringStringify(queryParameters);
  }

  const body = requestParameters.body as any;

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
 * Test HTML handling
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const htmlPostResponse = (
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
 * Test HTML handling
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function htmlPost(
  requestParameters: HtmlPostRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<string> {
  return pipe(
    htmlPostRequest(configuration),
    fetchRequest(configuration),
    htmlPostResponse(configuration),
  )(requestParameters);
}

/**
 * Test sending an arbitrary unsupported format - e.g. YAML
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const postYamlRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: PostYamlRequestParameters,
): FetchParameters => {
  if (
    requestParameters.value === null ||
    requestParameters.value === undefined
  ) {
    throw new APIRequestError(
      `Required parameter requestParameters.value was null or undefined when calling postYaml.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  headerParameters.set('Content-Type', 'application/yaml');

  let url: string = `${basePath.replace(/\/+$/, '')}/post-yaml`;
  if (queryParameters && Object.keys(queryParameters).length > 0) {
    url += '?' + querystringStringify(queryParameters);
  }

  const body = requestParameters.value as any;

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
 * Test sending an arbitrary unsupported format - e.g. YAML
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const postYamlResponse = (
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
 * Test sending an arbitrary unsupported format - e.g. YAML
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function postYaml(
  requestParameters: PostYamlRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    postYamlRequest(configuration),
    fetchRequest(configuration),
    postYamlResponse(configuration),
  )(requestParameters);
}

/**
 * Get an arbitrary JSON blob.
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const rawJsonGetRequest = ({
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

  let url: string = `${basePath.replace(/\/+$/, '')}/raw_json`;
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
 * Get an arbitrary JSON blob.
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const rawJsonGetResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<object> => {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  } else {
    switch (response.status.toString()) {
      default:
        throw response;
    }
  }
};

/**
 * Get an arbitrary JSON blob.
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function rawJsonGet(
  configuration: OperationConfiguration = {},
): Promise<object> {
  return pipe(
    rawJsonGetRequest(configuration),
    fetchRequest(configuration),
    rawJsonGetResponse(configuration),
  )();
}

/**
 * Send an arbitrary JSON blob
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const soloObjectPostRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: SoloObjectPostRequestParameters,
): FetchParameters => {
  if (
    requestParameters.value === null ||
    requestParameters.value === undefined
  ) {
    throw new APIRequestError(
      `Required parameter requestParameters.value was null or undefined when calling soloObjectPost.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  headerParameters.set('Content-Type', 'application/json');

  let url: string = `${basePath.replace(/\/+$/, '')}/solo-object`;
  if (queryParameters && Object.keys(queryParameters).length > 0) {
    url += '?' + querystringStringify(queryParameters);
  }

  const body = requestParameters.value as any;

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
 * Send an arbitrary JSON blob
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const soloObjectPostResponse = (
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
 * Send an arbitrary JSON blob
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function soloObjectPost(
  requestParameters: SoloObjectPostRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    soloObjectPostRequest(configuration),
    fetchRequest(configuration),
    soloObjectPostResponse(configuration),
  )(requestParameters);
}