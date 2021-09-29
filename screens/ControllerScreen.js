import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import PinItem from "../components/PinItem";

const pins = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
];
const ControllerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.headerTxt}>Pins:</Text>
        <Text style={styles.statusTxt}>CONNECTED</Text>
      </View>
      <View style={styles.pinsContainer}>
        <FlatList
          data={pins}
          renderItem={({ item }) => {
            return <PinItem pin={item.id} />;
          }}
          keyExtractor={(pin) => pin.id.toString()}
        />
      </View>
    </View>
  );
};

export default ControllerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D2CECE",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 15,
    justifyContent: "flex-start",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pinsContainer: {
    flex: 1,
    backgroundColor: "#495558",
    height: "100%",
    margin: 10,
    padding: 11,
  },
  headerTxt: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "bold",
  },
  statusTxt: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#1DAB6F",
    fontWeight: "normal",
  },
});
