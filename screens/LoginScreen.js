import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function LoginScreen({ navigation }) {
  const [identifier, setIdentifier] = useState("");

  const handleSendOTP = () => {
    const isNumber = /^\d{10}$/.test(identifier);
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);

    if (!isNumber && !isEmail) {
      alert("Enter a valid 10-digit phone number or valid email");
      return;
    }

    navigation.navigate("OTP", { identifier });
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/Zlogo.png")} style={styles.logo} />
      <Text style={styles.title}>Welcome</Text>

      <TextInput
        style={styles.input}
        placeholder="Email or Phone Number"
        value={identifier}
        onChangeText={setIdentifier}
        keyboardType="default"
      />

      <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>New here? Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", padding: 20 },
  logo: { width: 80, height: 80, marginBottom: 20, resizeMode: "contain" }, // smaller logo
  title: { fontSize: 26, fontWeight: "bold", color: "#ff6600", marginBottom: 20 },
  input: { width: "100%", borderWidth: 1, borderColor: "#ff6600", borderRadius: 10, padding: 12, marginBottom: 15 },
  button: { backgroundColor: "#ff6600", padding: 15, borderRadius: 10, alignItems: "center", width: "100%", marginBottom: 10 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  link: { marginTop: 10, color: "#ff6600" },
});
