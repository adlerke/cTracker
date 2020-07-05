import styled from "styled-components";
import {LinearGradient} from "expo-linear-gradient";
import { Dimensions } from "react-native";
const width = Dimensions.get("window").width;
export const Wrapper = styled.View`
  background-color:${props => props.theme.containerBg};
  flex: 1;
`;

export const Container = styled.ScrollView`
  padding: 0px 16px;
`;
export const Img = styled.Image``;
export const ContainerCard = styled.ScrollView``;

export const ContainerCardInfo = styled.View`
  flex: 1;
  flex-direction: column;
  border-radius: 8px;
  padding: 0px 16px;
  padding: 15px;

  background-color: ${props => props.theme.cardBg};

`;
export const LinearCardTop = styled(LinearGradient)`
flex : 1;
border-radius: 8px;
margin-top: 7px;

`
export const CardInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  background-color: ${props => props.theme.cardBg};
  border-radius: 8px;
  margin-bottom: 12px;
`;
export const CardInfoTop = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  /* background-color: ${props => props.theme.cardTopBg}; */
  padding: 10px 19px;
`;
export const CardInfoState = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${props => props.theme.cardBg};
  margin-bottom: 12px;
  border-bottom-left-radius : 10px;
  border-bottom-right-radius : 10px;
  padding: 15px;
`;
export const TextInfo = styled.Text`
  margin-top: 10px;
  color: ${(props) => (props.color ? props.color : props.theme.textPrimary)};
  font-family: "Ubuntu_700Bold";
  font-size: 20px;
`;
export const DefaultText = styled.Text`
  padding-bottom: 5px;
  font-size: ${props => props.size ?props.size : 16}px ;
  color: ${props=> props.theme.textPrimary};
  font-family: ${props => props.font ?props.font : "Ubuntu_700Bold"} ;
  margin-top: 10px;
`;
export const TitleInfoState = styled.Text`
  margin-top: 10px;
  color: ${props => props.theme.textPrimary};
  font-family: "Roboto_500Medium";
  font-size: 16px;
`;
export const TitleInfo = styled.Text`
  margin-top: 10px;
  color: ${props => props.theme.textPrimary};
  font-family: "Roboto_500Medium";
  font-size: 12px;
`;
export const LootieContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const StateContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items:center ; 
  align-content: flex-start;
  justify-content: space-between;
  width: 100%;
`;
export const ContainerBottom = styled.View`
  padding-top: 10px;
`;
export const ContainerSearch = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Hr = styled.View`
margin: 10px 0px;
    border-bottom-color: ${props => props.theme.blacky};
    border-bottom-width: 0.2px;
`;
export const ColumnView = styled.View`
    flex-direction: column;
    width: 70%
`;