import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  width: 100%;
  min-height: 55px;
  border-radius: 4px;
  margin-top: 15px;
  border: 1.5px solid #0000001a;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DivDescription = styled.Text`
  width: 80%;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #999;
`;

export const Date = styled.Text`
  font-size: 12px;
  color: #c1c1c1;
`;
