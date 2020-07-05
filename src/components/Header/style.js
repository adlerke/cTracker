import styled from "styled-components";
import { Colors } from "../../themes/colors";
import Constants from "expo-constants";
import { Dimensions,Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const width = Dimensions.get("window").width;

export const HeaderApp = styled.View`
  height: ${Platform.OS==='ios'? Constants.statusBarHeight*2 : Constants.statusBarHeight *2.5}px;
  background-color: ${(props) => props.theme.containerBg};
  align-content: center;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 16px;
  flex-direction: row;

`;
export const DefaultText = styled.Text`
  padding-bottom: 5px;
  font-size: ${props => props.size ?props.size : 16}px ;
  color: ${props=> props.theme.textPrimary};
  font-family: ${props => props.font ?props.font : "Ubuntu_700Bold"} ;
  margin-top: 10px;
`;
export const ContainerHeaderStart = styled.View`
  margin-top: ${Constants.statusBarHeight}px;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 50%;
`;
export const ContainerHeaderEnd = styled.View`
  margin-top: ${Constants.statusBarHeight}px;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  width: 50%;
`;
