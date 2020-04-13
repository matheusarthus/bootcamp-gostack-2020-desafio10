export function refreshOrdersRequest(id, page) {
  return {
    type: '@user/REFRESH_ORDERS_REQUEST',
    payload: { id, page },
  };
}

export function refreshOrdersSuccess(data, page) {
  return {
    type: '@user/REFRESH_ORDERS_SUCCESS',
    payload: { data, page },
  };
}

export function startOrderRequest(deliveryman_id, order_id) {
  return {
    type: '@user/START_ORDER_REQUEST',
    payload: { deliveryman_id, order_id },
  };
}

export function confirmOrderRequest(formData, order_id, deliveryman_id) {
  return {
    type: '@user/CONFIRM_ORDER_REQUEST',
    payload: { formData, order_id, deliveryman_id },
  };
}
