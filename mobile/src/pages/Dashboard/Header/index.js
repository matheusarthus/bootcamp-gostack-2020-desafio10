import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Top,
  Content,
  Avatar,
  TextContainer,
  Welcome,
  Name,
  LogoutButton,
  Bottom,
  Title,
  SelectOrders,
  OptionOne,
  OptionTwo,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Top>
        <Content>
          <Avatar
            source={{ uri: 'https://api.adorable.io/avatar/50/GASPAR.png' }}
          />
          <TextContainer>
            <Welcome>Bem vindo de volta,</Welcome>
            <Name>Gaspar Antunes</Name>
          </TextContainer>
        </Content>
        <LogoutButton>
          <Icon name="exit-to-app" size={20} color="#E74040" />
        </LogoutButton>
      </Top>
      <Bottom>
        <Title>Entregas</Title>
        <SelectOrders>
          <OptionOne>Pendentes</OptionOne>
          <OptionTwo>Entregues</OptionTwo>
        </SelectOrders>
      </Bottom>
    </Container>
  );
}
