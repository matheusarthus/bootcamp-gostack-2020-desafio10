import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const OrdersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 60px;
  padding: 0 20px;
`;
