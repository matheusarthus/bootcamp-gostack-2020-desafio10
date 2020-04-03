import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 50px 30px;
`;

export const Avatar = styled.Image`
  width: 136px;
  height: 136px;
  border-radius: 68px;
  align-self: center;
`;

export const NameContainer = styled.View`
  margin-top: 40px;
`;

export const LabelName = styled.Text`
  font-size: 12px;
  color: #667;
`;

export const Name = styled.Text`
  font-size: 22px;
  color: #444;
  font-weight: bold;
`;

export const EmailContainer = styled.View`
  margin-top: 15px;
`;

export const LabelEmail = styled.Text`
  font-size: 12px;
  color: #667;
`;

export const Email = styled.Text`
  font-size: 18px;
  color: #444;
  font-weight: bold;
`;

export const DateContainer = styled.View`
  margin-top: 15px;
`;

export const LabelDate = styled.Text`
  font-size: 12px;
  color: #667;
`;

export const Date = styled.Text`
  font-size: 18px;
  color: #444;
  font-weight: bold;
`;

export const LogoutButton = styled(Button)`
  margin-top: 40px;
  background: #e74040;
`;
