import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList } from "react-native";
import { useQuery } from "react-query";
import { activityAPI, ActivityResponse } from "../apis/activity";
import VList from "./VList";

const Activity: React.FC<NativeStackScreenProps<any, "Activities">> = () => {
  const { data: activityData } = useQuery<ActivityResponse>(
    ["activities", "activity"],
    activityAPI.activity
  );
  return activityData ? (
    <FlatList
      keyExtractor={item => item.id + ""}
      data={activityData.themes}
      renderItem={({ item }) => (
        <VList
          name={item.name}
          location={item.location}
          title={item.title}
          ticketType={item.ticket_type}
          discountPercent={item.discount_percent}
          priceOrigin={item.price_origin}
          priceDiscounted={item.price_discounted}
        />
      )}
    />
  ) : null;
};

export default Activity;
