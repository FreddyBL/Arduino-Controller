import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ControllerScreen from "./screens/ControllerScreen";
import aJSON_Parse from "async-json-parse";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { sendMessage, onMessageReceived } from "./api/wsocket";
import { GlobalProvider, useGlobalContext } from "./GlobalContext";
const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Controller"
          options={{
            title: "Android Controller",
            headerStyle: {
              backgroundColor: "#0D1828",
            },
            headerTintColor: "#fff",
          }}
          component={ControllerScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
