import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/Zlogo.png")} style={styles.avatar} />
        <View style={styles.stats}>
          <Text style={styles.statNumber}>25</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statNumber}>1200</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statNumber}>350</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      <View style={styles.bio}>
        <Text style={styles.name}>User Name</Text>
        <Text style={styles.description}>Bio</Text>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>

      <View style={styles.feed}>
        {[...Array(9).keys()].map((i) => (
          <View key={i} style={styles.feedItem} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { flexDirection: "row", alignItems: "center", padding: 20 },
  avatar: { width: 80, height: 80, borderRadius: 40, marginRight: 20 },
  stats: { flex: 1, alignItems: "center" },
  statNumber: { fontSize: 18, fontWeight: "bold", color: "#ff6600" },
  statLabel: { fontSize: 14, color: "gray" },
  bio: { paddingHorizontal: 20 },
  name: { fontSize: 16, fontWeight: "bold" },
  description: { fontSize: 14, marginTop: 4 },
  editButton: { borderWidth: 1, borderColor: "#ff6600", margin: 20, borderRadius: 8, padding: 10, alignItems: "center" },
  editText: { color: "#ff6600", fontWeight: "bold" },
  feed: { flexDirection: "row", flexWrap: "wrap" },
  feedItem: { width: "33%", height: 120, backgroundColor: "#ffe6cc", borderWidth: 1, borderColor: "#fff" },
});
