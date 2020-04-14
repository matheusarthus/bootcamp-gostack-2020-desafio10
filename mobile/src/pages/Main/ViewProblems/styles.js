import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  height: 100%;
  align-items: center;
`;

export const Background = styled.View`
  background-color: #7d40e7;
  height: 155px;
  width: 100%;
`;

export const Title = styled.Text`
  position: absolute;
  top: 70px;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const ProblemsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  top: -55px;
  width: 335px;
`;

export const EmptyText = styled.Text`
  top: 20px;
  color: #999;
`;
