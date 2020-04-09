import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Container, Background, Form, Input, SubmitButton } from './styles';

import api from '~/services/api';

export default function SubmitProplem({ navigation, route }) {
  const { order_id } = route.params;
  const [description, setDescription] = useState('');

  function handleSubmit() {
    try {
      api.post(`delivery/${order_id}/problems`, {
        description,
      });

      Alert.alert('Envio com sucesso', 'Problema enviado com sucesso.');

      navigation.goBack();
    } catch (err) {
      Alert.alert(
        'Falha na solicitação',
        'Houve um erro no envio do problema, tente novamente.'
      );
    }
  }

  return (
    <Container>
      <Background />

      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          multiline
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
          value={description}
          onChangeText={setDescription}
          textAlignVertical="top"
        />

        <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
      </Form>
    </Container>
  );
}
