import React from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import styled from "styled-components/native";

const Door = styled.Image``;
const First = styled.View``;

const Title = styled.Text`
  font-size: 27px;
  font-weight: 800;
  align-self: center;
  padding-top: 8px;
  padding-bottom: 40px;
`;

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  return (
    <ScrollView
      pagingEnabled={true}
      horizontal
      style={{ marginTop: 45, backgroundColor: "#FEF2C6" }}
    >
      <First style={styles.container}>
        <Door source={require("./images/Header.png")} />
        <Title>제주 쉬기 딱 좋은 지역별 안내</Title>
        <Door source={require("./images/JejuMap.png")} />
      </First>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
  },
});
