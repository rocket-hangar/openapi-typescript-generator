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
import type { Order } from '../models';
import { typeSerializer } from '../runtime';

/* eslint-disable */

export interface DeleteOrderRequestParameters {
  orderId: number;
}
export interface GetOrderByIdRequestParameters {
  orderId: number;
}
export interface PlaceOrderRequestParameters {
  body: Order;
}

/**
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * Delete purchase order by ID
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const deleteOrderRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: DeleteOrderRequestParameters,
): FetchParameters => {
  if (
    requestParameters.orderId === null ||
    requestParameters.orderId === undefined
  ) {
    throw new APIRequestError(
      `Required parameter requestParameters.orderId was null or undefined when calling deleteOrder.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  let url: string = `${basePath.replace(
    /\/+$/,
    '',
  )}/store/order/{orderId}`.replace(
    `{${'orderId'}}`,
    encodeURIComponent(String(requestParameters.orderId)),
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
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * Delete purchase order by ID
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const deleteOrderResponse = (
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
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * Delete purchase order by ID
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function deleteOrder(
  requestParameters: DeleteOrderRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<void> {
  return pipe(
    deleteOrderRequest(configuration),
    fetchRequest(configuration),
    deleteOrderResponse(configuration),
  )(requestParameters);
}

/**
 * Returns a map of status codes to quantities
 * Returns pet inventories by status
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const getInventoryRequest = ({
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

  if (apiKey) {
    headerParameters.set('api_key', apiKey('api_key')); // api_key authentication
  }

  let url: string = `${basePath.replace(/\/+$/, '')}/store/inventory`;
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
 * Returns a map of status codes to quantities
 * Returns pet inventories by status
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const getInventoryResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<{ [key: string]: number }> => {
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
 * Returns a map of status codes to quantities
 * Returns pet inventories by status
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function getInventory(
  configuration: OperationConfiguration = {},
): Promise<{ [key: string]: number }> {
  return pipe(
    getInventoryRequest(configuration),
    fetchRequest(configuration),
    getInventoryResponse(configuration),
  )();
}

/**
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * Find purchase order by ID
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const getOrderByIdRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: GetOrderByIdRequestParameters,
): FetchParameters => {
  if (
    requestParameters.orderId === null ||
    requestParameters.orderId === undefined
  ) {
    throw new APIRequestError(
      `Required parameter requestParameters.orderId was null or undefined when calling getOrderById.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  let url: string = `${basePath.replace(
    /\/+$/,
    '',
  )}/store/order/{orderId}`.replace(
    `{${'orderId'}}`,
    encodeURIComponent(String(requestParameters.orderId)),
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
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * Find purchase order by ID
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const getOrderByIdResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<Order> => {
  if (response.status >= 200 && response.status < 300) {
    return response.json().then(typeSerializer.toValueObject('Order'));
  } else {
    switch (response.status.toString()) {
      default:
        throw response;
    }
  }
};

/**
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * Find purchase order by ID
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function getOrderById(
  requestParameters: GetOrderByIdRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<Order> {
  return pipe(
    getOrderByIdRequest(configuration),
    fetchRequest(configuration),
    getOrderByIdResponse(configuration),
  )(requestParameters);
}

/**
 * Place an order for a pet
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const placeOrderRequest = ({
  basePath = '',
  querystringStringify = querystring,
  username,
  password,
  apiKey,
  accessToken,
  headers,
  credentials,
}: RequestConfiguration = {}) => (
  requestParameters: PlaceOrderRequestParameters,
): FetchParameters => {
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new APIRequestError(
      `Required parameter requestParameters.body was null or undefined when calling placeOrder.`,
    );
  }

  const queryParameters: UrlQueryInput = {};

  const headerParameters: Headers = new Headers(headers);

  headerParameters.set('Content-Type', 'application/json');

  let url: string = `${basePath.replace(/\/+$/, '')}/store/order`;
  if (queryParameters && Object.keys(queryParameters).length > 0) {
    url += '?' + querystringStringify(queryParameters);
  }

  const body = JSON.stringify(
    typeSerializer.toJsonObject('Order')(requestParameters.body),
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
 * Place an order for a pet
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export const placeOrderResponse = (
  configuration: ResponseConfiguration = {},
) => async (response: Response): Promise<Order> => {
  if (response.status >= 200 && response.status < 300) {
    return response.json().then(typeSerializer.toValueObject('Order'));
  } else {
    switch (response.status.toString()) {
      default:
        throw response;
    }
  }
};

/**
 * Place an order for a pet
 * @throws {APIRequestError} throw when the request is not correct
 * @throws {APIExceptionError} throw when response is out of 2xx
 * @throws {Response} throw when the response.status is not accepted (fallback throwing)
 * @throws {APISerializeError} throw when fail serialize data (include request and response)
 */
export async function placeOrder(
  requestParameters: PlaceOrderRequestParameters,
  configuration: OperationConfiguration = {},
): Promise<Order> {
  return pipe(
    placeOrderRequest(configuration),
    fetchRequest(configuration),
    placeOrderResponse(configuration),
  )(requestParameters);
}
