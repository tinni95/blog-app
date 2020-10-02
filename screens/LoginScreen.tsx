import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { LOGIN_MUTATION } from "../apollo/mutations";
import { ArrowButton } from "../components/ArrowButton";
import { Bold, Regular } from "../components/StyledText";
import { StyledTextInput } from "../components/StyledTextInput";

import Colors from "../constants/Colors";

interface LoginProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginProps> = ({ navigation }) => {
  const [username, setUsername] = useState<string>("");

  const [login, { data }] = useMutation(LOGIN_MUTATION, {
    onCompleted: ({ token }) => {
      AsyncStorage.setItem("TOKEN", token).then(() =>
        navigation.navigate("Home")
      );
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.header}>
          <Bold>WELCOME</Bold>
          <Regular>Insert you username to start</Regular>
        </View>
        <View style={styles.inputContainer}>
          <StyledTextInput
            placeholderTextColor={Colors.WHITE}
            placeholder={"Username"}
            value={username}
            onChangeText={(u) => setUsername(u)}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.white} />
        <View style={styles.semiwhite}>
          <ArrowButton
            onPress={() => login({ variables: { username } })}
            style={{ marginTop: -30, marginRight: 20 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  top: {
    flex: 1,
    padding: 20,
  },
  bottom: {
    flex: 1,
  },
  white: {
    flex: 3,
  },
  semiwhite: {
    flex: 1,
    backgroundColor: Colors.SEMI_WHITE,
    alignItems: "flex-end",
  },
  header: {
    flex: 2,
    justifyContent: "flex-end",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default LoginScreen;
