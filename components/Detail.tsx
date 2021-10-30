import React from "react";
import styled from "styled-components/native";

const Name = styled.Text`
  color: black;
  font-size: 20px;
  justify-content: center;
`;
const Desc = styled.Text`
  color: black;
  font-size: 20px;
  justify-content: center;
`;
const Sights = styled.Text`
  color: black;
  font-size: 20px;
  justify-content: center;
`;

const Detail = (name, desc, sights) => (
  <View>
    <Name>{name}</Name>
    <Desc>{desc}</Desc>
    <Sights>{sights}</Sights>
  </View>
);

export default Detail;
