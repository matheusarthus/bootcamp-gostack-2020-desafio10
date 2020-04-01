import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Top,
  Delivery,
  Mid,
  DivShapes,
  Circle1,
  Circle2,
  Circle3,
  Line1,
  Line2,
  DivStatus,
  DivWaiting,
  DivStarted,
  DivDeliveried,
  Waiting1,
  Waiting2,
  Started,
  Deliveried,
  Bottom,
  DivDate,
  TitleDate,
  Date,
  DivInfo,
  TitleCity,
  City,
  DetailsLink,
  DetailsLinkText,
} from './styles';

export default function Order() {
  return (
    <Container>
      <Top>
        <Icon name="local-shipping" size={20} color="#7d40e7" />
        <Delivery>Encomenda 01</Delivery>
      </Top>
      <Mid>
        <DivShapes>
          <Circle1 />
          <Line1 />
          <Circle2 />
          <Line2 />
          <Circle3 />
        </DivShapes>
        <DivStatus>
          <DivWaiting>
            <Waiting1>Aguardando</Waiting1>
            <Waiting2>Retirada</Waiting2>
          </DivWaiting>
          <DivStarted>
            <Started>Retirada</Started>
          </DivStarted>
          <DivDeliveried>
            <Deliveried>Entregue</Deliveried>
          </DivDeliveried>
        </DivStatus>
      </Mid>
      <Bottom>
        <DivDate>
          <TitleDate>Data</TitleDate>
          <Date>15/01/2020</Date>
        </DivDate>
        <DivInfo>
          <TitleCity>Cidade</TitleCity>
          <City>Rio do Sul</City>
        </DivInfo>
        <DetailsLink onPress={() => {}}>
          <DetailsLinkText>Ver detalhes</DetailsLinkText>
        </DetailsLink>
      </Bottom>
    </Container>
  );
}
