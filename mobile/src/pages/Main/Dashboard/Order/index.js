import React from 'react';
import { parseISO, format } from 'date-fns';
import PropTypes from 'prop-types';

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

export default function Order({ data, navigation }) {
  function dateFormatted(date) {
    return format(parseISO(date), 'dd/MM/yyyy');
  }

  return (
    <Container>
      <Top>
        <Icon name="local-shipping" size={20} color="#7d40e7" />
        <Delivery>Encomenda {data.id}</Delivery>
      </Top>
      <Mid>
        <DivShapes>
          <Circle1 />
          <Line1 />
          <Circle2 status={data.start_date} />
          <Line2 />
          <Circle3 status={data.end_date} />
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
          <Date>{dateFormatted(data.createdAt)}</Date>
        </DivDate>
        <DivInfo>
          <TitleCity>Cidade</TitleCity>
          <City>{data.recipient.cidade}</City>
        </DivInfo>
        <DetailsLink
          onPress={() => {
            navigation.navigate('DetailsOrder', { data });
          }}
        >
          <DetailsLinkText>Ver detalhes</DetailsLinkText>
        </DetailsLink>
      </Bottom>
    </Container>
  );
}

Order.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  data: PropTypes.shape({
    id: PropTypes.number,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    createdAt: PropTypes.string,
    recipient: PropTypes.shape({
      cidade: PropTypes.string,
    }),
  }).isRequired,
};
