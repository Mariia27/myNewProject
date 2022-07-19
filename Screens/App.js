import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Button, Alert, } from 'react-native';

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);
  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.textInput}>
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <TextInput
              placeholder="Логін"
              value={name}
              onChangeText={nameHandler}
              style={styles.input}
            />
            <TextInput
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={emailHandler}
              style={styles.input}
            />
            <TextInput
              placeholder="Пароль"
              value={password}
              onChangeText={passwordHandler}
              style={styles.input}
            />
            <Button title={"Login"} style={styles.input} onPress={onLogin} />
          </KeyboardAvoidingView></View>
        <View></View>
      </View >
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "tomato",
    padding: 40,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});