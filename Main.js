import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ControllerScreen from "./screens/ControllerScreen";
import aJSON_Parse from "async-json-parse";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { sendMessage, onMessageReceived } from "./api/wsocket";
import { GlobalProvider, useGlobalContext } from "./GlobalContext";
import { useNavigation } from "@react-navigation/core";
import ConnectScreen from "./screens/ConnectScreen";
import ArduinoConnectScreen from "./screens/ArduinoConnectScreen";
const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ConnectScreen">
        <Stack.Screen
          name="ControllerScreen"
          options={{
            title: "Android Controller",
            headerStyle: {
              backgroundColor: "#0D1828",
            },
            headerTintColor: "#fff",
            headerLeft: () => null,
            headerRight: () => null,
          }}
          component={ControllerScreen}
        />
        <Stack.Screen
          name="ConnectScreen"
          options={{
            title: "Android Controller: Offline",
            headerStyle: {
              backgroundColor: "#0D1828",
            },
            headerTintColor: "#fff",
            headerLeft: null,
          }}
          component={ConnectScreen}
        />
        <Stack.Screen
          name="ArduinoConnectScreen"
          options={{
            title: "Connect to Arduno",
            headerStyle: {
              backgroundColor: "#0D1828",
            },
            headerTintColor: "#fff",
            headerLeft: null,
          }}
          component={ArduinoConnectScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
