import React, { createContext, useState, useContext, useEffect } from "react";
import aJSON_Parse from "async-json-parse";
export const GlobalContext = createContext();
import { sendMessage } from "./api/wsocket";
import { onMessageReceived } from "./api/wsocket";
import { useDispatch } from "react-redux";
import { setState } from "./redux/actions/pins";
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
import { SERVER_IP, PORT } from "@env";

const updateInterval = 5000;
export const GlobalProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [ws, setWs] = useState(null);
  const [arduinoCOM, setArduinoCOM] = useState(null);

  const dispatch = useDispatch();

  const wsocketConnect = () => {
    const wsocket = new WebSocket(`ws://${SERVER_IP}:${PORT}`);
    let isMounted = true;
    wsocket.onclose = (event) => {
      console.log("[Client] Lost connection to Node.js server");
      setIsConnected(false);
      setTimeout(function () {
        wsocketConnect();
      }, 5000);
    };
    wsocket.onopen = (event) => {
      console.log("[Client] Successfully connected to Node.js server.");
      setIsConnected(true);
    };
    wsocket.onmessage = ({ data }) => {
      aJSON_Parse(data).then((json) => {
        const { type, payload } = json;
        switch (type) {
          case "initialSettings": {
            let pinsState = [];
            for (let i = 0; i < payload.length; i++) {
              pinsState.push(payload[i].state);
            }
            dispatch(setState(pinsState));
            break;
          }
          case "selectCOMPort": {
            break;
          }
        }
      });
    };
    setWs(wsocket);
  };
  useEffect(() => {
    wsocketConnect();
    return () => {
      if (ws !== null) {
        ws.close();
      }
    };
  }, []);
  const values = {
    ws,
    setWs,
    arduinoCOM,
    setArduinoCOM,
    isConnected,
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};
