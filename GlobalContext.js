import React, { createContext, useState, useContext } from "react";
import aJSON_Parse from "async-json-parse";
export const GlobalContext = createContext();
import { sendMessage } from "./api/wsocket";
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const [ws, setWs] = useState(() => {
    const wsocket = new WebSocket("ws://192.168.0.100:3016");

    wsocket.onopen = (event) => {
      console.log("[Client] Successfully connected to Node.js server.");
      sendMessage(wsocket, "arduino/req_listports", {});
    };
    wsocket.onclose = (event) => {
      console.log("[Client] Lost connection to Node.js server");
    };
    wsocket.onmessage = ({ data }) => {
      aJSON_Parse(data).then((json) => {
        const { type, payload } = json;
        onMessageReceived(wsocket, type, payload);
      });
    };
    return wsocket;
  });
  const [arduinoCOM, setArduinoCOM] = useState(null);
  const values = { ws, setWs, arduinoCOM, setArduinoCOM };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};
