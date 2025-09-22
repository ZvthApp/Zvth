import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LiveDetail({ route }) {
  const { live } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{live.title}</Text>
      <Text style={styles.status}>Status: {live.status.toUpperCase()}</Text>
      <Text style={styles.info}>This is where we can show live video or details.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", color: "#ff6600" },
  status: { fontSize: 16, marginVertical: 10 },
  info: { fontSize: 14, color: "gray" },
});
