import produce from 'immer';

const INITIAL_STATE = {
  user: null,
  orders: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.user = action.payload.data.deliveryman;
        draft.orders = action.payload.data.orders;
        break;
      }
      default:
    }
  });
}
