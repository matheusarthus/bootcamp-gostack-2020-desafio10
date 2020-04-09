import React, { useState } from 'react';

import { Container, Background, Form, Input, SubmitButton } from './styles';

export default function SubmitProplem() {
  const [problem, setProblem] = useState('');

  function handleSubmit() {}

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
          value={problem}
          onChangeText={setProblem}
          textAlignVertical="top"
        />

        <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
      </Form>
    </Container>
  );
}
