import produce from 'immer';

const INITIAL_STATE = {
  user: null,
  pendingOrders: null,
  deliveredOrders: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.user = action.payload.data.deliveryman;
        draft.pendingOrders = action.payload.data.pendingOrders;
        draft.deliveredOrders = action.payload.data.deliveredOrders;
        break;
      }
      default:
    }
  });
}
