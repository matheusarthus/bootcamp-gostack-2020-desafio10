import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RefreshControl } from 'react-native';
import PropTypes from 'prop-types';

import Header from './Header';
import Order from './Order';

import { Container, OrdersList, EmptyText } from './styles';

import { refreshOrdersRequest } from '~/store/modules/user/actions';

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();

  const [viewMode, setViewMode] = useState('pending');
  /* const [cache, setCache] = useState(0); */

  const [page, setPage] = useState(1);

  const user = useSelector((state) => state.user.user);
  const refreshing = useSelector((state) => state.user.refreshing);
  const pendingOrders = useSelector((state) => state.user.pendingOrders);
  const deliveredOrders = useSelector((state) => state.user.deliveredOrders);

  useEffect(() => {
    dispatch(refreshOrdersRequest(user.id, page));
  }, [dispatch, user.id, page]);

  const cache = useMemo(() => {
    if (viewMode === 'pending') {
      return pendingOrders;
    }
    return deliveredOrders;
  }, [viewMode, pendingOrders, deliveredOrders]);

  function refreshList() {
    setPage(1);
  }

  function loadMore() {
    setPage(page + 1);
  }

  return (
    <Container>
      <Header viewMode={viewMode} setViewMode={setViewMode} />

      {cache === null || Object.keys(cache).length === 0 ? (
        <EmptyText>Não há encomendas para serem listadas.</EmptyText>
      ) : (
        <OrdersList
          data={cache}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refreshList}
              colors={['#fff']}
              progressBackgroundColor="#7d40e7"
              size="large"
            />
          }
          onEndReachedThreshold={0.1}
          onEndReached={loadMore}
          keyStractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Order data={item} navigation={navigation} />
          )}
        />
      )}
    </Container>
  );
}

Dashboard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
};
