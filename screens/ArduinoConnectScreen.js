import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { useGlobalContext } from "../GlobalContext";
import { useNavigation } from "@react-navigation/core";
import serverDownSVG from "../images/server-down.svg";
import { Icon } from "react-native-elements";
import * as api from "../api/http";
import { Button } from "react-native-elements";
import { ListItem, Avatar } from "react-native-elements";

const ArduinoConnectScreen = () => {
  const {
    isConnected,
    isArduinoConnected,
    connectToArduino,
    isConnectingToArduino,
  } = useGlobalContext();
  const navigator = useNavigation();
  const [statusMsg, setStatusMsg] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [ports, setPorts] = useState([]);
  useEffect(() => {
    if (isConnected) {
      if (isArduinoConnected) {
        navigator.navigate("ControllerScreen");
      } else {
        navigator.navigate("ArduinoConnectScreen");
      }
    } else {
      navigator.navigate("ConnectScreen");
    }
  }, [isConnected, isArduinoConnected]);

  const fetchCOMPorts = async () => {
    const response = await api.listCOMPorts();
    setPorts(response.data.value);
  };

  useEffect(() => {
    fetchCOMPorts();
  }, []);

  const handleConnect = (port) => {
    const status = connectToArduino(port);
  };

  const content =
    ports.length > 0 ? (
      ports.map((item, i) => (
        <ListItem style={{ marginBottom: 20 }} key={i} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{`Manufacturer: ${item.manufacturer}`}</ListItem.Title>
            <ListItem.Subtitle>{`PORT: ${item.path}`}</ListItem.Subtitle>
          </ListItem.Content>

          <Button
            onPress={() => {
              handleConnect(item);
            }}
            title="Connect"
          />
        </ListItem>
      ))
    ) : (
      <Text style={{ marginBottom: 20 }}>
        No serial ports found on the server. Make sure an Arduino is connected.
      </Text>
    );
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20, fontSize: 15, fontFamily: "Roboto" }} h2>
        Select a port:{" "}
      </Text>
      {content}

      <Button
        onPress={() => {
          fetchCOMPorts();
        }}
        title="Reload"
      />
      <Text style={{ marginTop: 20 }}>{statusMsg}</Text>
      {isConnectingToArduino && (
        <ActivityIndicator size="small" color="#0000ff" />
      )}
    </View>
  );
};

export default ArduinoConnectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
