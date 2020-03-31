import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 75px;
  align-items: center;
  padding: 10px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

export const TextContainer = styled.View`
  margin-left: 10px;
`;

export const Welcome = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const LogoutButton = styled.TouchableOpacity``;

export const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const SelectOrders = styled.View`
  flex-direction: row;
`;

export const OptionOne = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
  text-decoration: underline #7d40e7;
`;

export const OptionTwo = styled.Text`
  font-size: 14px;
  color: #999;
  margin-left: 10px;
`;
