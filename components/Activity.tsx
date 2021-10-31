import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const Door = styled.Image`
  margin: 30px 0px;
  align-self: center;
`;
const Map = styled.Image`
  margin-top: 56px;
  align-self: center;
`;
const Title = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: 800;
`;

const Activity = () => {
  return (
    <View>
      <Door source={require("../assets/images/Header.png")} />
      <Title>제주 쉬기 딱 좋은 지역별 안내</Title>
      <Map source={require("../assets/images/JejuMap.png")} />
    </View>
  );
};

export default Activity;
