import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RNCamera } from 'react-native-camera';

import { Container, Background, CameraContainer, SendButton } from './styles';

import { confirmOrderRequest } from '~/store/modules/user/actions';

export default function ConfirmOrder({ route }) {
  const camera = useRef(null);

  const dispatch = useDispatch();

  const deliveryman_id = useSelector((state) => state.user.user.id);
  const { order_id } = route.params;

  async function takePicture() {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: false,
        forceUpOrientation: true,
        fixOrientation: true,
      };

      const data = await camera.current.takePictureAsync(options);

      const timeStamp = new Date();

      const formData = new FormData();
      formData.append('file', {
        uri: data.uri,
        type: 'image/jpeg',
        name: `${data.uri}_${timeStamp}.jpg`,
      });

      dispatch(confirmOrderRequest(formData, order_id, deliveryman_id));
    }
  }

  return (
    <Container>
      <Background />
      <CameraContainer>
        <RNCamera
          ref={camera}
          style={{
            height: 344,
            width: 235,
            marginLeft: 1,
            marginRight: 1,
            marginTop: 1,
            marginBottom: 11,
            alignSelf: 'center',
          }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          captureAudio={false}
        />
        <SendButton onPress={() => takePicture()}>Enviar</SendButton>
      </CameraContainer>
    </Container>
  );
}
