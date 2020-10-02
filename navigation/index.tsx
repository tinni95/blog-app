import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as React from "react";
import LoginScreen from "../screens/LoginScreen";
import CreatePost from "../screens/CreatePost";

import HomeScreen from "../screens/HomeScreen";
import PostScreen from "../screens/PostScreen";

import { RootStackParamList } from "../types";

export default function Navigation() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={"Login"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{ title: "New Post" }}
      />
    </Stack.Navigator>
  );
}
