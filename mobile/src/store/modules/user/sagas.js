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
      'Falha na atualização',
      'Houve uma falha na atualização das encomendas.'
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

export function* confirmOrder({ payload }) {
  const { formData, order_id, deliveryman_id } = payload;

  try {
    const uploadResponse = yield call(api.post, 'files', formData);

    const assignature_id = uploadResponse.data.id;

    try {
      yield call(api.put, `/delivery/${order_id}/signature/${assignature_id}`);

      Alert.alert(
        'Entrega Confirmada',
        'A confirmação da entrega foi realizada com sucesso!'
      );

      yield put(refreshOrdersRequest(deliveryman_id));

      RootNavigation.navigate('Dashboard');
    } catch (err) {
      Alert.alert(
        'Falha na confirmação',
        'Houve um erro na confirmação da entrega, tente novamente.'
      );
    }
  } catch (err) {
    Alert.alert(
      'Falha no upload',
      'Houve um erro no upload da imagem, tente novamente.'
    );
  }
}

export default all([
  takeLatest('@user/CONFIRM_ORDER_REQUEST', confirmOrder),
  takeLatest('@user/START_ORDER_REQUEST', startOrder),
  takeLatest('@user/REFRESH_ORDERS_REQUEST', refreshOrders),
]);
