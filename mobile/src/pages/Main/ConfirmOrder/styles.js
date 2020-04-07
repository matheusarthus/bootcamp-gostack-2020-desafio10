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

export const CameraContainer = styled.View`
  position: absolute;
  top: 70px;
  align-self: center;
  background: #fff;
  width: 335px;
  height: 420px;
  border-radius: 2px;
`;

export const SendButton = styled(Button)`
  background: #7d40e7;
`;

export const Photo = styled.Image`
  width: 145px;
  height: 145px;
`;
