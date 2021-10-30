import React from "react";
import { Image, View } from "react-native";
import styled from "styled-components/native";

const Title = styled.Text`
  font-size: 24;
  font-family: NotoSansKR-Bold;
`;

const Home = () => {
  return (
    <View>
      <Image source={require("../assets/images/Header.png")} />
      <Title>제주 쉬기 딱 좋은 지역별 안내</Title>
      <Image source={require("../assets/images/JejuMap.png")} />
    </View>
  );
};

export default Home;
