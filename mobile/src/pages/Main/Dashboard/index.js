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

  useEffect(() => {});

  return (
    <Container>
      <Header viewMode={viewMode} setViewMode={setViewMode} />

      <OrdersList />
    </Container>
  );
}
