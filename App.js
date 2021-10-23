import React, { useState, useEffect } from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import styled from "styled-components/native";
import axios from "axios";

const Door = styled.Image``;
const First = styled.View``;
const Second = styled.View``;
const Third = styled.View``;

const Title = styled.Text`
  font-size: 27px;
  font-weight: 800;
  align-self: center;
  padding-top: 8px;
  padding-bottom: 40px;
`;
const BigTitle = styled.Text``;
const Layer = styled.View``;

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  const [locations, setLocations] = useState([]);

  const getLocations = async () => {
    try {
      const response = await fetch(
        "https://69cee40f-f372-4734-a2ff-a043da89d0b2.mock.pstmn.io/location"
      );
      const json = await response.json();
      setLocations(json.locations);
      console.log(json.locations);
    } catch (error) {
      console.log(error);
    } finally {
      setLocations(false);
    }
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      horizontal
      style={{ marginTop: 45, backgroundColor: "#FEF2C6" }}
    >
      <First style={styles.container}>
        <Door source={require("./images/Header.png")} />
        <Title>제주 쉬기 딱 좋은 지역별 안내</Title>
        <Door source={require("./images/JejuMap.png")} />
      </First>
      <Second style={styles.container}>
        {/* {locations.map(location => (
          <Layer key={location.id}>
            <BigTitle>{location.id}</BigTitle>
          </Layer>
        ))} */}
      </Second>
      <Third style={styles.container}></Third>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
  },
});
