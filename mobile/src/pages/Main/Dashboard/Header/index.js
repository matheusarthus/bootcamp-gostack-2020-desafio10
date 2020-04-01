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

export default function Header({ navigation }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  function handleLogout() {
    dispatch(signOut());
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
          <OptionOneButton onPress={() => {}}>
            <OptionOne>Pendentes</OptionOne>
          </OptionOneButton>
          <OptionTwoButton onPress={() => {}}>
            <OptionTwo>Entregues</OptionTwo>
          </OptionTwoButton>
        </SelectOrders>
      </Bottom>
    </Container>
  );
}
