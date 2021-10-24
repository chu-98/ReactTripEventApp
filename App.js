import React, { useState, useEffect } from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import styled from "styled-components/native";
import Location from "./components/Location";

const Door = styled.Image``;
const First = styled.View``;
const Second = styled.View``;

const Title = styled.Text`
  font-size: 27px;
  font-weight: 800;
  align-self: center;
  padding-top: 8px;
  padding-bottom: 40px;
`;

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  const [locations, setLocations] = useState([]);

  const getLocations = async () => {
    try {
      const response = await fetch(
        "https://69cee40f-f372-4734-a2ff-a043da89d0b2.mock.pstmn.io/location"
      );
      const data = await response.json();
      setLocations(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
    await Promise.all([getLocations]);
  };

  useEffect(() => {
    getData();
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
        <FlatList
          data={locations}
          renderItem={({ item }) => (
            <Location name={item.name} desc={item.desc} sights={item.sights} />
          )}
          keyExtractor={item => item.id + ""}
        />
      </Second>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
  },
});
