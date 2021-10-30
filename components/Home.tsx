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

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Home = (name, desc, sights) => (

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
  <View>
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
  </View>
);

export default Home;


const styles = StyleSheet.create({
    container: {
      width: SCREEN_WIDTH,
    },
  });