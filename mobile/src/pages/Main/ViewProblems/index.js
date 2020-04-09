import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import Problem from './Problem';

import { Container, Background, Title, ProblemsList } from './styles';

import api from '~/services/api';

export default function ViewProblems({ navigation, route }) {
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
      <ProblemsList
        data={problems}
        keyStractor={(item) => String(item.id)}
        renderItem={({ item }) => <Problem data={item} />}
      />
    </Container>
  );
}
