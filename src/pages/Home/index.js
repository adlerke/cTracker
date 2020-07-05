import React, { useEffect, useState, useContext } from "react";
import {
  Wrapper,
  Container,
  CardInfo,
  ContainerCardInfo,
  LootieContainer,
  TitleInfo,
  TextInfo,
  CardInfoState,
  StateContainer,
  TitleInfoState,
  DefaultText,
  Hr,
  CardInfoTop,
  ColumnView,
  LinearCardTop,
} from "./style";
import { Image, Linking } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { ThemeContext } from "styled-components";

import axios from "axios";

export default function Home({ darkModeValue, onDarkModeChange }) {
  const themeContext = useContext(ThemeContext);

  const pickerSelectStyles = {
    inputAndroid: {
      height: 60,
      backgroundColor: themeContext.selectColor,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 24,
      fontSize: 16,
      color: themeContext.textPrimary,
    },
    inputIOS: {
      height: 60,
      backgroundColor: themeContext.selectColor,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 24,
      fontSize: 16,
      color: themeContext.textPrimary,
    },
    placeholder: { color: themeContext.textPrimary },
  };
  const [ufs, setUfs] = useState([]);
  const [selectedUf, setSelectedUf] = useState([]);
  const [covidData, setCovidData] = useState([]);
  const [covidStateData, setCovidStateData] = useState([]);
  const [porcX, setPorcX] = useState(0);
  async function getUf() {
    const response = await axios.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    );
    const ufInitials = response.data.map((uf) => uf.sigla);
    setUfs(ufInitials);
  }
  async function getDataByState(state) {
    const response = await axios.get(
      `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${state}`
    );
    setCovidStateData(response.data);
  }
  async function getCovidData() {
    const response = await axios.get(
      "https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi"
    );
    setCovidData(response.data);
  }
  function handleClickPrevent() {
    Linking.openURL("https://coronavirus.saude.gov.br/");
  }
  useEffect(() => {
    getCovidData();
  }, []);
  useEffect(() => {
    getUf();
  }, []);

  return (
    <>
      <Wrapper>
        <Container>
          <LinearCardTop
            colors={[themeContext.cardTopStart, themeContext.cardTopEnd]}
            start={{ x: 1, y: 0.3 }}
            end={{ x: 1, y: 1 }}
          >
            <CardInfoTop
              onPress={handleClickPrevent}
              style={{
                shadowColor: "#333",
                shadowOffset: {
                  width: 2,
                  height: 6,
                },
                shadowOpacity: 0.34,
                shadowRadius: 5.27,

                elevation: 10,
              }}
              activeOpacity={0.7}
            >
              <Image
                style={{
                  width: 125,
                  height: 125,

                }}
                source={require("../../assets/wear_mask.png")}
              />

              <ColumnView>
                <DefaultText size={22}>Previna-se !</DefaultText>
                <DefaultText font={"Roboto_400Regular"}>
                  <DefaultText font={"Roboto_500Medium"} size={16}>
                    Clique aqui
                  </DefaultText>{" "}
                  e saiba mais sobre o Covid-19 e como se previnir{" "}
                </DefaultText>
              </ColumnView>
            </CardInfoTop>
          </LinearCardTop>
          <DefaultText>Casos no Brasil</DefaultText>

          <ContainerCardInfo>
            <CardInfo>
              <LootieContainer>

          <Image  style={{width:15,height: 15}} source={require('../../assets/infected.png')}/>

                <TextInfo color={"#e1a620"}>
                  {covidData?.confirmados?.total}
                </TextInfo>
                <TitleInfo>Infectados</TitleInfo>
              </LootieContainer>
              <LootieContainer>

                          <Image  style={{width:15,height: 15}} source={require('../../assets/death.png')}/>

                <TextInfo color={"#eb445a"}>
                  {covidData?.obitos?.total}
                </TextInfo>
                <TitleInfo>Mortes</TitleInfo>
              </LootieContainer>
              <LootieContainer>

                          <Image  style={{width:15,height: 15}} source={require('../../assets/success.png')}/>

                <TextInfo color={"#1da584"}>
                  {covidData?.confirmados?.recuperados}
                </TextInfo>
                <TitleInfo>Recuperados</TitleInfo>
              </LootieContainer>
            </CardInfo>
            <Hr />
            <CardInfo>
              <LootieContainer>
                <TextInfo color={"#e1a620"}>
                  {covidData?.confirmados?.novos}
                </TextInfo>
                <TitleInfo>Novos Casos</TitleInfo>
              </LootieContainer>
              <LootieContainer>
                <TextInfo color={"#eb445a"}>
                  {covidData?.obitos?.novos}
                </TextInfo>
                <TitleInfo>Novos Óbitos</TitleInfo>
              </LootieContainer>
              <LootieContainer>
                <TextInfo color={"#1da584"}>
                  {(
                    (covidData?.confirmados?.recuperados * 100) /
                    covidData?.confirmados?.total
                  ).toFixed(1)}
                  %
                </TextInfo>
                <TitleInfo>Recuperados </TitleInfo>
              </LootieContainer>
            </CardInfo>
          </ContainerCardInfo>
          <DefaultText style={{ marginTop: 15 }}>
            Casos por estado{" "}
            {covidStateData.state ? "- " + covidStateData.state : ""}{" "}
          </DefaultText>
          <RNPickerSelect
            placeholder={{
              color: "#222",
              label: "Selecione o estado",
            }}
            value={selectedUf}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
            onValueChange={(value) => {
              setSelectedUf(value);
              getDataByState(value);
            }}
            items={ufs?.map((uf) => ({
              label: uf,
              value: uf,
            }))}
          />
          <CardInfoState>
            <StateContainer>
              <TitleInfoState>Infectados</TitleInfoState>
              <TextInfo>
                {covidStateData.cases ? covidStateData.cases : "-"}
              </TextInfo>
            </StateContainer>
            <StateContainer>
              <TitleInfoState>Mortes</TitleInfoState>
              <TextInfo>
                {covidStateData.deaths ? covidStateData.deaths : "-"}
              </TextInfo>
            </StateContainer>
            <StateContainer>
              <TitleInfoState>Suspeitos</TitleInfoState>
              <TextInfo>
                {covidStateData.suspects ? covidStateData.suspects : "-"}
              </TextInfo>
            </StateContainer>
          </CardInfoState>
        </Container>
      </Wrapper>
    </>
  );
}
