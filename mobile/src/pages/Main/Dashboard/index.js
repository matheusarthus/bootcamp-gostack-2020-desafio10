import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import Order from './Order';

import { Container, OrdersList } from './styles';

import { refreshOrdersRequest } from '~/store/modules/user/actions';

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();

  const [viewMode, setViewMode] = useState('pending');

  const user = useSelector((state) => state.user.user);
  const pendingOrders = useSelector((state) => state.user.pendingOrders);
  const deliveredOrders = useSelector((state) => state.user.deliveredOrders);

  useEffect(() => {
    dispatch(refreshOrdersRequest(user.id));
  }, [dispatch, user.id]);

  const cache = useMemo(() => {
    if (viewMode === 'pending') {
      return pendingOrders;
    }
    return deliveredOrders;
  }, [viewMode, pendingOrders, deliveredOrders]);

  return (
    <Container>
      <Header viewMode={viewMode} setViewMode={setViewMode} />

      <OrdersList
        data={cache}
        keyStractor={(item) => String(item.id)}
        renderItem={({ item }) => <Order data={item} navigation={navigation} />}
      />
    </Container>
  );
}
