import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { useSelector } from "react-redux";
import { useGlobalContext } from "../GlobalContext";
import { useNavigation } from "@react-navigation/core";
import Button from "../components/Button";
import serverDownSVG from "../images/server-down.svg";
import { Icon } from "react-native-elements";
const ConnectScreen = () => {
  const { isConnected, retryConnection } = useGlobalContext();
  const navigator = useNavigation();
  const [statusMsg, setStatusMsg] = useState("");
  useEffect(() => {
    if (isConnected) {
      navigator.navigate("ControllerScreen");
    } else {
      navigator.navigate("ConnectScreen");
    }
  }, [isConnected]);

  const handlePress = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.headerTxt}>Server's Down</Text>
      </View>
      <Icon
        name="exclamation-triangle"
        type="font-awesome"
        color="#bd3746"
        size={120}
      />
      <Text style={styles.statusTxt}>
        Error: Server seems to be offline at the moment.
      </Text>
      <Text style={styles.statusTxt}>Retrying to connnect...</Text>
    </View>
  );
};

export default ConnectScreen;

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
  image: {
    width: 30,
    height: 30,
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
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
  },
  statusTxt: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: "#ad5645",
    fontWeight: "normal",
    marginVertical: 10,
  },
});
