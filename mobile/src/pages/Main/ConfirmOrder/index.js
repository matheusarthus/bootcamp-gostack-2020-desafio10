import React, { useRef } from 'react';
import { RNCamera } from 'react-native-camera';

import { Container, Background, CameraContainer, SendButton } from './styles';

import api from '~/services/api';

export default function ConfirmOrder() {
  const camera = useRef(null);

  /*  async function takePicture() {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: true,
        forceUpOrientation: true,
        fixOrientation: true,
      };

      const data = await camera.current.takePictureAsync(options);
      console.tron.log(data.uri);

      const cleanURL = data.uri.replace('file://', '');

      console.tron.log(cleanURL);

      const formData = new FormData();
      formData.append('file', {
        uri: cleanURL,
        type: 'image/jpeg',
        name: `${data.uri}_${'1'}.jpg`,
      });

      console.tron.log(formData);

      const response = await api.post('files', formData);

      console.tron.log(response);

      const formData = new FormData();
      formData.append('file', {
        uri: cleanURL,
        type: 'image/jpeg',
        name: 'testPhotoName',
      });
      fetch('http://192.168.15.109:3334/files/', {
        method: 'post',
        body: formData,
      }).then((res) => {
        console.tron.log(res);
      });
    }
  } */

  async function takePicture() {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: true,
        forceUpOrientation: true,
        fixOrientation: true,
      };

      const timeStamp = new Date();

      const data = await camera.current.takePictureAsync(options);
      console.tron.log(data.uri);

      const formData = new FormData();
      formData.append('file', {
        uri: data.uri,
        type: 'image/jpeg',
        name: `${data.uri}_${timeStamp}.jpg`,
      });

      console.tron.log(formData);

      const response = await api.post('files', formData);

      console.tron.log(response);
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
