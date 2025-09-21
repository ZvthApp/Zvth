import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import VideosScreen from "./VideosScreen";
import MusicScreen from "./MusicScreen";
import PodcastsScreen from "./PodcastsScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ff6600",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#fff" },
      }}
    >
      <Tab.Screen name="Feed" component={VideosScreen} />
      <Tab.Screen name="Music" component={MusicScreen} />
      <Tab.Screen name="Podcasts" component={PodcastsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
