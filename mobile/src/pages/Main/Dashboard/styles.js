import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  padding: 0 0 30px 0;
`;

export const OrdersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 110px;
  padding: 0 12px;
`;

export const EmptyText = styled.Text`
  margin-top: 150px;
  align-self: center;
  color: #999;
`;
