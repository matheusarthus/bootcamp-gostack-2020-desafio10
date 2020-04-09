import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  background: #fff;
`;

export const Background = styled.View`
  background-color: #7d40e7;
  height: 155px;
  width: 100%;
`;

export const Form = styled.View`
  top: -70px;
  align-self: center;
  border-radius: 4px;
  width: 335px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  width: 100%;
  height: 300px;
  font-size: 16px;
  color: #222;
  background: #fff;
  border-radius: 4px;
  border: 1.5px solid #0000001a;
  padding: 20px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  background: #7d40e7;
`;
