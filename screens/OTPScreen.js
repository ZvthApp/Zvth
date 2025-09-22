import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function OTPScreen({ route, navigation }) {
  const { identifier } = route.params;
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp !== "1234") {
      alert("Invalid OTP. Try 1234 for demo.");
      return;
    }
    navigation.replace("Dashboard");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>Sent to {identifier}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
      />

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#ff6600" },
  subtitle: { fontSize: 14, marginVertical: 10 },
  input: { width: "100%", borderWidth: 1, borderColor: "#ff6600", borderRadius: 10, padding: 12, marginBottom: 15 },
  button: { backgroundColor: "#ff6600", padding: 15, borderRadius: 10, alignItems: "center", width: "100%" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
