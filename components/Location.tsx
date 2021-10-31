import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList } from "react-native";
import { useQuery } from "react-query";

import { locationAPI, LocationsResponse } from "../apis/location";
import HList from "./HList";

const Location: React.FC<NativeStackScreenProps<any, "Locations">> = () => {
  const { data: locationData } = useQuery<LocationsResponse>(
    ["locations", "location"],
    locationAPI.location
  );
  return locationData ? (
    <FlatList
      keyExtractor={item => item.id + ""}
      data={locationData.locations}
      renderItem={({ item }) => (
        <HList name={item.name} desc={item.desc} sights={item.sights} />
      )}
    />
  ) : null;
};

export default Location;
