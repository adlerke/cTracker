import React, { useState, useEffect, useContext } from "react";
import {
  Wrapper,
  Container,
  PreventionTips,
  PreventionTip,
  TextDefault,
  Button,
  IconView,
  ButtonText,
} from "./style";
import { ThemeContext } from "styled-components";

import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { Image, Linking } from "react-native";
export default function Info() {
  const themeContext = useContext(ThemeContext);

  function handleDisk(){
    Linking.openURL(`tel:136`)

  }
  function handleWebPage(){
    Linking.openURL("https://coronavirus.saude.gov.br/");

  }
  function handleWhatsapp(){
    Linking.openURL("https://api.whatsapp.com/send?phone=+55061999380031")
  }

  return (
    <Wrapper>
      <Container>
        <TextDefault size={15}>Dicas de Prevenção</TextDefault>
        <PreventionTips>
          <PreventionTip>
          <Image  style={{width:70,height: 70}} source={require('../../assets/wash-your-hands.png')}/>
            <TextDefault size={12} font={'Roboto_500Medium'}>Lavar as Mãos</TextDefault>
          </PreventionTip>
          <PreventionTip>
          <Image  style={{width:70,height: 70}} source={require('../../assets/mask.png')}/>
            <TextDefault size={12} font={'Roboto_500Medium'}>Usar Máscara</TextDefault>
          </PreventionTip>
          <PreventionTip>
          <Image  style={{width:70,height: 70}} source={require('../../assets/social.png')}/>
            <TextDefault size={12} font={'Roboto_500Medium'}>Distanciamento</TextDefault>
          </PreventionTip>
        </PreventionTips>
        <TextDefault size={15}>Alguns Sintomas</TextDefault>
        <PreventionTips>
          <PreventionTip>
          <Image  style={{width:70,height: 70}} source={require('../../assets/cough.png')}/>
            <TextDefault size={12} font={'Roboto_500Medium'}>Tosse</TextDefault>
          </PreventionTip>
          <PreventionTip>
          <Image  style={{width:70,height: 70}} source={require('../../assets/headache.png')}/>
            <TextDefault size={12} font={'Roboto_500Medium'}>Dor de Cabeça</TextDefault>
          </PreventionTip>
          <PreventionTip>
          <Image  style={{width:70,height: 70}} source={require('../../assets/fever.png')}/>
            <TextDefault size={12} font={'Roboto_500Medium'}>Febre</TextDefault>
          </PreventionTip>
        </PreventionTips>
        <TextDefault size={15}>Entre em Contato</TextDefault>
        <Button
            onPress={handleDisk}
          >
            <IconView>
              <Icon name="phone" color={themeContext.textPrimary}size={24} />
            </IconView>
            <ButtonText>Disque Saúde</ButtonText>
          </Button>
        <Button
            onPress={handleWebPage}
          >
            <IconView>
              <Icon name="message-square" color={themeContext.textPrimary} size={24} />
            </IconView>
            <ButtonText>Chat on-line</ButtonText>
          </Button>
        <Button
            onPress={handleWhatsapp}
          >
            <IconView>
              <FontAwesome name="whatsapp" color={themeContext.textPrimary} size={24} />
            </IconView>
            <ButtonText>WhatsApp</ButtonText>
          </Button>
      </Container>
    </Wrapper>
  );
}
// - Disque Saúde: 136
// - Chat on-line
// - WhatsApp: (061) 9.9938-0031