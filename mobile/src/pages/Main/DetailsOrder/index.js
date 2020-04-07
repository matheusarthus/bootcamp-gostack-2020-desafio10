/* eslint-disable no-nested-ternary */
import React from 'react';
import { useDispatch } from 'react-redux';
import { parseISO, format } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { startOrderRequest } from '~/store/modules/user/actions';

import {
  Container,
  Background,
  ExtraContainer,
  ContentInfo,
  DivTitleInfos,
  TitleInfos,
  DivRecipient,
  TitleRecipient,
  Recipient,
  DivAdress,
  TitleAdress,
  Adress1,
  Adress2,
  DivProduct,
  TitleProduct,
  Product,
  ContentStatus,
  DivTitleStatus,
  TitleStatus,
  DivStatus,
  LabelStatus,
  Status,
  DivDates,
  DivStartedDate,
  TitleStartedDate,
  StartedDate,
  DivDeliveredDate,
  TitleDeliveredDate,
  DeliveredDate,
  ContainerButtons,
  InfoProblemButton,
  InfoProblem,
  ViewProblemsButton,
  ViewProblems,
  ChangeStatusButton,
  NewStatus,
} from './styles';

export default function DetailsOrder({ navigation, route }) {
  const dispatch = useDispatch();

  const order = route.params.data;
  const { recipient } = order;

  function dateFormatted(date) {
    return format(parseISO(date), 'dd/MM/yyyy');
  }

  function handleStartOrder(deliveryman_id, order_id) {
    dispatch(startOrderRequest(deliveryman_id, order_id));
  }

  return (
    <Container>
      <Background />

      <ExtraContainer>
        <ContentInfo>
          <DivTitleInfos>
            <Icon name="local-shipping" size={20} color="#7d40e7" />
            <TitleInfos>Informações da entrega</TitleInfos>
          </DivTitleInfos>
          <DivRecipient>
            <TitleRecipient>DESTINATÁRIO</TitleRecipient>
            <Recipient>{recipient.name}</Recipient>
          </DivRecipient>
          <DivAdress>
            <TitleAdress>ENDEREÇO DE ENTREGA</TitleAdress>
            <Adress1>{`${recipient.logradouro}, ${recipient.numero}`}</Adress1>
            <Adress2>{`${recipient.cidade} - ${recipient.estado}, ${recipient.cep}`}</Adress2>
          </DivAdress>
          <DivProduct>
            <TitleProduct>PRODUTO</TitleProduct>
            <Product>{order.product}</Product>
          </DivProduct>
        </ContentInfo>

        <ContentStatus>
          <DivTitleStatus>
            <Icon name="event" size={20} color="#7d40e7" />
            <TitleStatus>Situação da entrega</TitleStatus>
          </DivTitleStatus>
          <DivStatus>
            <LabelStatus>STATUS</LabelStatus>
            <Status>
              {!order.start_date
                ? 'Pendente'
                : order.end_date
                ? 'Entregue'
                : 'Retirada'}
            </Status>
          </DivStatus>
          <DivDates>
            <DivStartedDate>
              <TitleStartedDate>DATA DA RETIRADA</TitleStartedDate>
              <StartedDate>
                {order.start_date
                  ? dateFormatted(order.start_date)
                  : '-- /-- / --'}
              </StartedDate>
            </DivStartedDate>
            <DivDeliveredDate>
              <TitleDeliveredDate>DATA DE ENTREGA</TitleDeliveredDate>
              <DeliveredDate>
                {order.end_date ? dateFormatted(order.end_date) : '-- /-- / --'}
              </DeliveredDate>
            </DivDeliveredDate>
          </DivDates>
        </ContentStatus>

        <ContainerButtons>
          <InfoProblemButton>
            <Icon name="highlight-off" size={20} color="#E74040" />
            <InfoProblem>Informar Problema</InfoProblem>
          </InfoProblemButton>
          <ViewProblemsButton>
            <Icon name="info-outline" size={20} color="#E7BA40" />
            <ViewProblems>Visualizar Problemas</ViewProblems>
          </ViewProblemsButton>
          <ChangeStatusButton
            onPress={() => {
              !order.start_date
                ? handleStartOrder(order.deliveryman_id, order.id)
                : navigation.navigate('ConfirmOrder');
            }}
            end_date={order.end_date}
            disabled={order.end_date}
          >
            <Icon
              name="check-circle"
              size={20}
              color={
                !order.start_date
                  ? '#1E90FF'
                  : order.end_date
                  ? '#32CD32'
                  : '#7D40E7'
              }
            />
            <NewStatus>
              {!order.start_date
                ? 'Confirmar Retirada'
                : order.end_date
                ? 'Encomenda Entregue'
                : 'Confirmar Entrega'}
            </NewStatus>
          </ChangeStatusButton>
        </ContainerButtons>
      </ExtraContainer>
    </Container>
  );
}
