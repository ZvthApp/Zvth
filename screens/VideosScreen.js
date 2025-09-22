import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Animated, Easing } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; 

// Dummy live schedule data with creative names
const initialLives = [
  { id: "1", title: "Chai Vibes", status: "running", thumbnail: require("../assets/Zlogo.png") },
  { id: "2", title: "Beat Drop", status: "upcoming", thumbnail: require("../assets/Zlogo.png") },
  { id: "3", title: "Mindcast", status: "ended", thumbnail: require("../assets/Zlogo.png") },
  { id: "4", title: "Tech Talks", status: "running", thumbnail: require("../assets/Zlogo.png") },
];

export default function VideosScreen({ navigation }) {
  const [lives] = useState(initialLives);

  const getBorderColor = (status) => {
    switch (status) {
      case "running": return "green";
      case "upcoming": return "red";
      case "ended": return "gray";
      default: return "gray";
    }
  };

  // Animated pulse for mic
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.4, duration: 600, useNativeDriver: true, easing: Easing.ease }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 600, useNativeDriver: true, easing: Easing.ease }),
      ])
    ).start();
  }, []);

  const renderLiveItem = ({ item }) => (
    <TouchableOpacity
      style={styles.liveItem}
      onPress={() => navigation.navigate("LiveDetail", { live: item })}
    >
      <Image
        source={item.thumbnail}
        style={[styles.circle, { borderColor: getBorderColor(item.status) }]}
      />
      <Text style={styles.liveTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Top App Title with Mic */}
      <View style={styles.header}>
        <Text style={styles.appName}>Zvth</Text>
        <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
          <MaterialCommunityIcons name="microphone" size={28} color="#ff6600" style={{ marginLeft: 10 }} />
        </Animated.View>
      </View>

      {/* Scheduled Lives (Instagram Stories Style) */}
      <FlatList
        data={lives}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderLiveItem}
        style={styles.liveList}
      />

      {/* Main Video Feed Placeholder */}
      <View style={styles.feed}>
        <Text style={styles.feedText}>Explore New Streams</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    paddingTop: 50, // space from top
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  appName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ff6600",
    letterSpacing: 1,
  },
  liveList: { paddingVertical: 12, paddingLeft: 10 },
  liveItem: { alignItems: "center", marginRight: 18 },
  circle: { width: 72, height: 72, borderRadius: 36, borderWidth: 4, marginBottom: 6, resizeMode: "contain" },
  liveTitle: { fontSize: 12, textAlign: "center", maxWidth: 70 },
  feed: { flex: 1, justifyContent: "center", alignItems: "center" },
  feedText: { fontSize: 18, fontWeight: "600", color: "#ff6600" },
});
