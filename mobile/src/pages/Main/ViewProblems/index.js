import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';

import Problem from './Problem';

import {
  Container,
  Background,
  Title,
  ProblemsList,
  EmptyText,
} from './styles';

import api from '~/services/api';

export default function ViewProblems({ route }) {
  const { order_id } = route.params;
  const [problems, setProblems] = useState();

  useEffect(() => {
    async function loadProblems() {
      try {
        const response = await api.get(`problems/${order_id}`);

        setProblems(response.data);
      } catch (err) {
        Alert.alert(
          'Falha na consulta',
          'Houve um erro na obtenção dos problemas, tente novamente.'
        );
      }
    }

    loadProblems();
  }, [order_id]);

  return (
    <Container>
      <Background />
      <Title>Encomenda {order_id}</Title>
      {!problems || Object.keys(problems).length === 0 ? (
        <EmptyText>Não há problemas para serem listados.</EmptyText>
      ) : (
        <ProblemsList
          data={problems}
          keyStractor={(item) => String(item.id)}
          renderItem={({ item }) => <Problem data={item} />}
        />
      )}
    </Container>
  );
}

ViewProblems.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      order_id: PropTypes.number,
    }),
  }).isRequired,
};
