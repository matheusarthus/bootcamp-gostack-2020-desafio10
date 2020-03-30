import produce from 'immer';

const INITIAL_STATE = {
  orders: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.orders = action.payload.orders;
        break;
      }
      default:
    }
  });
}
