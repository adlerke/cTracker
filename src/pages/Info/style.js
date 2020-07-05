import styled from "styled-components";
import Constants from "expo-constants";
import { Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';

const width =  Dimensions.get('window').width

export const Wrapper = styled.SafeAreaView`
  background-color: ${props => props.theme.containerBg};
  flex: 1;
`;
export const DefaultText = styled.Text`
  padding-bottom: 5px;
  font-size: ${props => props.size ?props.size : 16}px ;
  color: ${props=> props.theme.textPrimary};
  font-family: ${props => props.font ?props.font : "Ubuntu_700Bold"} ;
  margin-top: 10px;
`;
export const Container = styled.ScrollView`
  flex: 1;
  padding: 0px 16px;
`;
export const PreventionTips = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-around;

`
export const PreventionTip = styled.View`
flex:1;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: ${props => props.theme.cardBg};
border-radius:10px ;
padding:8px 0px ;
margin: 0px 2px;
`
export const TextDefault = styled.Text`
  padding-bottom: 5px;
  font-size: ${props => props.size ?props.size : 16}px ;
  color: ${props=> props.theme.textPrimary};
  font-family: ${props => props.font ?props.font : "Ubuntu_700Bold"} ;
  margin-top: 10px;
`;
export const Button = styled(RectButton)`
  background-color: ${props => props.theme.btnContact};
  /* background-color: #a9a9a9; */
  height: 60px;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  margin-top: 8px;
`;

export const IconView = styled.View`
  height: 60px;
  width: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  flex: 1;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.textPrimary};
  font-family: 'Roboto_500Medium';
  font-size: 16px;
`;