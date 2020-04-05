import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
`;

export const Background = styled.View`
  background-color: #7d40e7;
  height: 155px;
  width: 100%;
`;

export const ExtraContainer = styled.ScrollView`
  top: -90px;
`;

export const ContentInfo = styled.View`
  background-color: #fff;
  width: 335px;
  height: 200px;
  align-self: center;
  border-radius: 4px;
  padding: 12px;
  border: 1.5px solid #0000001a;
`;

export const DivTitleInfos = styled.View`
  flex-direction: row;
`;

export const TitleInfos = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
  margin-left: 10px;
`;

export const DivRecipient = styled.View`
  margin-top: 5px;
`;

export const TitleRecipient = styled.Text`
  font-size: 14px;
  color: #999;
  font-weight: bold;
`;

export const Recipient = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const DivAdress = styled.View`
  margin-top: 8px;
`;

export const TitleAdress = styled.Text`
  font-size: 14px;
  color: #999;
  font-weight: bold;
`;

export const Adress1 = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const Adress2 = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const DivProduct = styled.View`
  margin-top: 8px;
`;

export const TitleProduct = styled.Text`
  font-size: 14px;
  color: #999;
  font-weight: bold;
`;

export const Product = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const ContentStatus = styled.View`
  background-color: #fff;
  width: 335px;
  height: 140px;
  align-self: center;
  border-radius: 4px;
  padding: 12px;
  margin-top: 10px;
  border: 1.5px solid #0000001a;
`;

export const DivTitleStatus = styled.View`
  flex-direction: row;
`;

export const TitleStatus = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
  margin-left: 10px;
`;

export const DivStatus = styled.View`
  margin-top: 5px;
`;

export const LabelStatus = styled.Text`
  font-size: 14px;
  color: #999;
  font-weight: bold;
`;

export const Status = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const DivDates = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

export const DivStartedDate = styled.View``;

export const TitleStartedDate = styled.Text`
  font-size: 14px;
  color: #999;
  font-weight: bold;
`;

export const StartedDate = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const DivDeliveredDate = styled.View`
  margin-left: 50px;
`;

export const TitleDeliveredDate = styled.Text`
  font-size: 14px;
  color: #999;
  font-weight: bold;
`;

export const DeliveredDate = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const ContainerButtons = styled.View`
  flex: 1;
  background-color: #0000001a;
  width: 335px;
  height: 80px;
  align-self: center;
  border-radius: 4px;
  padding: 2px;
  margin-top: 10px;
  flex-direction: row;
`;

export const InfoProblemButton = styled.TouchableOpacity`
  background: #f8f9fd;
  width: 33%;
  align-items: center;
  padding: 10px;
`;

export const InfoProblem = styled.Text`
  font-size: 12px;
  color: #999;
  text-align: center;
  margin-top: 2px;
`;

export const ViewProblemsButton = styled.TouchableOpacity`
  margin-left: 2px;
  background: #f8f9fd;
  width: 33%;
  align-items: center;
  padding: 10px;
`;

export const ViewProblems = styled.Text`
  font-size: 12px;
  color: #999;
  text-align: center;
  margin-top: 2px;
`;

export const ChangeStatusButton = styled.TouchableOpacity`
  margin-left: 2px;
  background: ${(props) => (props.end_date ? '#00000000' : '#f8f9fd')};
  width: 33%;
  align-items: center;
  padding: 10px;
`;

export const NewStatus = styled.Text`
  font-size: 12px;
  color: #999;
  text-align: center;
  margin-top: 2px;
`;
