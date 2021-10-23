import React from "react";
import { View, Dimensions, ScrollView } from "react-native";
import styled from "styled-components/native";

const Door = styled.Image``;

const Title = styled.Text`
  flex: 1;
  font-size: 27px;
  font-weight: 800;
  align-self: center;
  padding-top: 8px;
  padding-bottom: 60px;
`;

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  return (
    <ScrollView style={{ backgroundColor: "#FEF8EA", marginTop: 40 }}>
      <Door source={require("./images/Header.png")} />
      <Title>제주 쉬기 딱 좋은 지역별 안내</Title>
      <Door source={require("./images/JejuMap.png")} />
    </ScrollView>
  );
}
