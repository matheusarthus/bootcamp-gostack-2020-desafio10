import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import Order from './Order';

import { Container, OrdersList } from './styles';

export default function Dashboard() {
  const [viewMode, setViewMode] = useState('pending');
  const [cache, setCache] = useState([]);

  const pendingOrders = useSelector((state) => state.user.pendingOrders);
  const deliveredOrders = useSelector((state) => state.user.deliveredOrders);

  useEffect(() => {
    if (viewMode === 'pending') {
      setCache(pendingOrders);
    } else {
      setCache(deliveredOrders);
    }
  }, [viewMode, pendingOrders, deliveredOrders]);

  return (
    <Container>
      <Header viewMode={viewMode} setViewMode={setViewMode} />

      <OrdersList
        data={cache}
        keyStractor={(item) => String(item.id)}
        renderItem={({ item }) => <Order data={item} />}
      />
    </Container>
  );
}
