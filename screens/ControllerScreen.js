import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import PinItem from "../components/PinItem";
import { useNavigation } from "@react-navigation/core";
import { useGlobalContext } from "../GlobalContext";

const pins = [
  {
    pinId: 0,
  },
  {
    pinId: 1,
  },
  {
    pinId: 2,
  },
  {
    pinId: 3,
  },
  {
    pinId: 4,
  },
  {
    pinId: 5,
  },
  {
    pinId: 6,
  },
  {
    pinId: 7,
  },
  {
    pinId: 8,
  },
  {
    pinId: 9,
  },
  {
    pinId: 10,
  },
  {
    pinId: 11,
  },
];
const ControllerScreen = () => {
  const { isConnected } = useGlobalContext();
  const navigator = useNavigation();
  let listComponent = null;
  if (!isConnected) {
    listComponent = <View />;
  } else {
    listComponent = (
      <FlatList
        data={pins}
        renderItem={({ item, idx }) => {
          return <PinItem pin={item.pinId} />;
        }}
        keyExtractor={(pin) => pin.pinId.toString()}
      />
    );
  }
  useEffect(() => {
    if (isConnected) {
      navigator.navigate("ControllerScreen");
    } else {
      navigator.navigate("ConnectScreen");
    }
  }, [isConnected]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.headerTxt}>Pins:</Text>
        <Text style={styles.statusTxt}>CONNECTED</Text>
      </View>
      <View style={styles.pinsContainer}>{listComponent}</View>
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
