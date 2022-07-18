import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, } from 'react-native';

export default function App() {
  const [value, setValue] = useState("");
  const inputHandler = (text) => setValue(text);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.textInput}>
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <TextInput
              placeholder="Type text"
              value={value}
              onChangeText={inputHandler}
            />
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
  }
});