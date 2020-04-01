import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Order from './Order';

import { Container, OrdersList } from './styles';

export default function Dashboard() {
  const [cache, setCache] = useState([]);

  const pendingOrders = useSelector((state) => state.user.orders);

  return (
    <Container>
      <OrdersList />
      <Order />
    </Container>
  );
}
