import React from "react";
import { Feather, FontAwesome, AntDesign } from "@expo/vector-icons";
import { HeaderApp,ContainerHeaderStart,ContainerHeaderEnd , DefaultText} from "./style";
import { Switch,Text, Platform } from "react-native";

function Header({ darkModeValue, onDarkModeChange }) {
  return (
    
    <HeaderApp>
        <ContainerHeaderStart>
        </ContainerHeaderStart>
        <ContainerHeaderEnd>
      <Switch style={Platform.OS === 'ios' ? {marginRight: 10} : {marginRight: 10,marginTop:5,transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]} }
value={darkModeValue} onValueChange={onDarkModeChange} />
      {darkModeValue === true ? (
        <Feather name="sun" size={20} color="#FFA500" />
      ) : (
        <FontAwesome name="moon-o" size={20} color="black" />
      )}
        </ContainerHeaderEnd>
    </HeaderApp>
  );
}

export default Header;
