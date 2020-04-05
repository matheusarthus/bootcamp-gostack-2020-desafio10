import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 5px;
  width: 335px;
  height: 170px;
  background: #0000001a;
  border-radius: 4px;
  padding: 2px;
`;

export const Top = styled.View`
  flex-direction: row;
  background: #fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 5px;
`;

export const Delivery = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
  margin-left: 10px;
`;

export const Mid = styled.View`
  background: #fff;
  padding: 7px 0;
  justify-content: space-between;
`;

export const DivShapes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`;

export const Circle1 = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: solid 1px #7d40e7;
  background: #7d40e7;
`;

export const Circle2 = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: solid 1px #7d40e7;
  background: ${(props) => (props.status ? '#7d40e7' : '#fff')};
`;

export const Circle3 = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: solid 1px #7d40e7;
  background: ${(props) => (props.status ? '#7d40e7' : '#fff')};
`;

export const Line1 = styled.View`
  width: 121px;
  height: 2px;
  background: #7d40e7;
`;

export const Line2 = styled.View`
  width: 121px;
  height: 2px;
  background: #7d40e7;
`;

export const DivStatus = styled.View`
  padding: 5px 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const DivWaiting = styled.View`
  width: 33%;
  align-items: flex-start;
`;

export const DivStarted = styled.View`
  width: 33%;
  align-items: center;
`;

export const DivDeliveried = styled.View`
  width: 33%;
  align-items: flex-end;
`;

export const Waiting1 = styled.Text`
  font-size: 10px;
  color: #999;
`;

export const Waiting2 = styled.Text`
  font-size: 10px;
  color: #999;
  margin-left: 7px;
`;

export const Started = styled.Text`
  font-size: 10px;
  color: #999;
`;

export const Deliveried = styled.Text`
  font-size: 10px;
  color: #999;
  margin-right: 5px;
`;

export const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #f8f9fd;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 10px 0;
`;

export const DivDate = styled.View`
  align-items: flex-start;
  padding: 10px;
`;

export const TitleDate = styled.Text`
  font-size: 10px;
  color: #999;
`;

export const Date = styled.Text`
  font-size: 14px;
  color: #444;
  font-weight: bold;
`;

export const DivInfo = styled.View`
  align-items: flex-start;
  padding: 10px;
`;

export const TitleCity = styled.Text`
  font-size: 10px;
  color: #999;
`;

export const City = styled.Text`
  font-size: 14px;
  color: #444;
  font-weight: bold;
`;

export const DetailsLink = styled.TouchableOpacity`
  padding: 20px 10px 0 0px;
`;

export const DetailsLinkText = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
`;
