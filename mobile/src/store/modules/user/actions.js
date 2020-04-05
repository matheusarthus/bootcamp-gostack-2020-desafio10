export function refreshOrdersRequest(id) {
  return {
    type: '@user/REFRESH_ORDERS_REQUEST',
    payload: { id },
  };
}

export function refreshOrdersSuccess(data) {
  return {
    type: '@user/REFRESH_ORDERS_SUCCESS',
    payload: { data },
  };
}

export function startOrderRequest(deliveryman_id, order_id) {
  return {
    type: '@user/START_ORDER_REQUEST',
    payload: { deliveryman_id, order_id },
  };
}

export function startOrderSuccess(id) {
  return {
    type: '@user/START_ORDER_SUCCESS',
    payload: { id },
  };
}
