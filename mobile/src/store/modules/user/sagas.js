import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import * as RootNavigation from '~/services/RootNavigation';
import api from '~/services/api';

import { refreshOrdersRequest, refreshOrdersSuccess } from './actions';

export function* refreshOrders({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `deliveries/${id}`);

    yield put(refreshOrdersSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha no acesso',
      'Houve um erro no acesso, verifique seu ID.'
    );
  }
}

export function* startOrder({ payload }) {
  try {
    const { deliveryman_id, order_id } = payload;

    yield call(api.put, `deliveryman/${deliveryman_id}/delivery/${order_id}`);

    yield put(refreshOrdersRequest(deliveryman_id));

    Alert.alert('Confirmação bem sucedida', 'Encomenda retirada com sucesso.');

    RootNavigation.navigate('Dashboard');
  } catch (err) {
    Alert.alert(
      'Falha no acesso à API',
      'Houve um erro na atualização da encomenda.'
    );
  }
}

export default all([
  takeLatest('@user/START_ORDER_REQUEST', startOrder),
  takeLatest('@user/REFRESH_ORDERS_REQUEST', refreshOrders),
]);
