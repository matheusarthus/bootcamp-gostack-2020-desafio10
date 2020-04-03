import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';

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
  OptionOneButton,
  OptionTwo,
  OptionTwoButton,
} from './styles';

export default function Header({ viewMode, setViewMode }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  function handleLogout() {
    dispatch(signOut());
  }

  function handleViewMode(mode) {
    setViewMode(mode);
  }

  return (
    <Container>
      <Top>
        <Content>
          <Avatar
            source={{
              uri: user
                ? user.avatar.url
                : `https://api.adorable.io/avatar/50/avatar.png`,
            }}
          />
          <TextContainer>
            <Welcome>Bem vindo de volta,</Welcome>
            <Name>{user ? user.name : 'Sem nome'}</Name>
          </TextContainer>
        </Content>
        <LogoutButton onPress={handleLogout}>
          <Icon name="exit-to-app" size={20} color="#E74040" />
        </LogoutButton>
      </Top>
      <Bottom>
        <Title>Entregas</Title>
        <SelectOrders>
          <OptionOneButton
            onPress={() => {
              handleViewMode('pending');
            }}
          >
            <OptionOne mode={viewMode}>Pendentes</OptionOne>
          </OptionOneButton>
          <OptionTwoButton
            onPress={() => {
              handleViewMode('delivered');
            }}
          >
            <OptionTwo mode={viewMode}>Entregues</OptionTwo>
          </OptionTwoButton>
        </SelectOrders>
      </Bottom>
    </Container>
  );
}
