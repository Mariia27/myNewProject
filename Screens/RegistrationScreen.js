import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Button, Alert, Image, ImageBackground, } from 'react-native';

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
                <ImageBackground source={require("./Screens/bgPhoto.jpg")} resizeMode="cover" style={styles.bgPhoto}>

                    <View style={styles.textInput}>
                        <View style={styles.title}>
                            <Text style={styles.title}>Реєстрація</Text>
                        </View>
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
                            <Button title={"Зареєструватися"} style={styles.btn} onPress={onLogin} />
                        </KeyboardAvoidingView></View>
                    <View></View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 16,
        paddingRight: 16,
    },
    title: {
        fontSize: 30,
        marginBottom: 30,

    },
    textInput: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        padding: 40,
        top: 263,
        borderRadius: 25,

    },
    input: {
        width: 343,
        height: 50,
        padding: 16,
        borderWidth: 1,
        borderColor: "#F6F6F6",
        borderRadius: 8,
        backgroundColor: "#F6F6F6",
        marginBottom: 16,

    },
    btn: {
        marginTop: 143,
    },
    bgPhoto: {
        flex: 1,




    }
});