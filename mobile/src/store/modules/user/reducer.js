import produce from 'immer';

const INITIAL_STATE = {
  user: null,
  pendingOrders: null,
  deliveredOrders: null,
  refreshing: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.user = action.payload.data.deliveryman;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.user = null;
        draft.pendingOrders = null;
        draft.deliveredOrders = null;
        break;
      }
      case '@user/REFRESH_ORDERS_REQUEST': {
        draft.refreshing = true;
        break;
      }
      case '@user/REFRESH_ORDERS_SUCCESS': {
        draft.refreshing = false;
        console.tron.log('page', action.payload.page);
        if (action.payload.page === 1) {
          draft.pendingOrders = action.payload.data.pendingOrders;
          draft.deliveredOrders = action.payload.data.deliveredOrders;
        } else {
          action.payload.data.deliveredOrders.map((x) =>
            draft.deliveredOrders.push(x)
          );
          action.payload.data.pendingOrders.map((x) =>
            draft.pendingOrders.push(x)
          );
        }
        break;
      }
      default:
    }
  });
}

/* case '@user/REFRESH_ORDERS_SUCCESS': {
  draft.pendingOrders = action.payload.data.pendingOrders;
  draft.deliveredOrders = action.payload.data.deliveredOrders;
  break;
} */
