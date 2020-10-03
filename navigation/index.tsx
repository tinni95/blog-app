import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as React from "react";
import LoginScreen from "../screens/LoginScreen";
import CreatePost from "../screens/CreatePost";

import HomeScreen from "../screens/HomeScreen";
import PostScreen from "../screens/PostScreen";

import { MaterialIcons } from "@expo/vector-icons";

import { RootStackParamList } from "../types";
import Colors from "../constants/Colors";

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
      initialRouteName={"Home"}
      screenOptions={{ headerShown: false }}
    >
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
        options={{
          title: "New Post",
          headerTitleStyle: {
            fontFamily: "quicksand-bold",
          },
          headerShown: true,
          headerLeft: (props) => (
            <MaterialIcons
              name="keyboard-arrow-left"
              size={30}
              onPress={props.onPress}
              color={Colors.BLUE}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
