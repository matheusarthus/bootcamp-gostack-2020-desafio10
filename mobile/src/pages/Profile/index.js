import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { parseISO, format } from 'date-fns';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Avatar,
  NameContainer,
  LabelName,
  Name,
  EmailContainer,
  LabelEmail,
  Email,
  DateContainer,
  LabelDate,
  Date,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  function handleLogout() {
    dispatch(signOut());
  }

  function dateFormatted(date) {
    return format(parseISO(date), 'dd/MM/yyyy');
  }

  return (
    <Container>
      <Avatar
        source={{
          uri: user
            ? user.avatar.url
            : `https://api.adorable.io/avatar/50/avatar.png`,
        }}
      />

      <NameContainer>
        <LabelName>Nome completo</LabelName>
        <Name>{user.name}</Name>
      </NameContainer>
      <EmailContainer>
        <LabelEmail>Email</LabelEmail>
        <Email>{user.email}</Email>
      </EmailContainer>
      <DateContainer>
        <LabelDate>Data de cadastro</LabelDate>
        <Date>{dateFormatted(user.createdAt)}</Date>
      </DateContainer>
      <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
    </Container>
  );
}
