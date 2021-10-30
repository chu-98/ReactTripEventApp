import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import Home from "../components/Home";
import Location from "../components/Location";
import Activity from "../components/Activity";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: "#FEF2C6" }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "black",
        headerStyle: {
          backgroundColor: "white",
        },
        headerTitleStyle: {
          color: "orange",
        },
        tabBarLabelStyle: {
          marginTop: -10,
          fontSize: 12,
          fontWeight: "700",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={24} color={"black"} />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarIcon: () => (
            <Ionicons name="map-outline" size={24} color={"black"} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: () => (
            <Ionicons name="airplane-outline" size={24} color={"black"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
