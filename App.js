import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import reducers from "./redux/reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { GlobalProvider } from "./GlobalContext";
import Main from "./Main";
import { BackHandler } from "react-native";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default function App() {
  const onBackPress = () => {
    console.log("back");
    return true;
  };
  useEffect(() => {
    console.log("called");
    BackHandler.addEventListener("hardwareBackPress", onBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    };
  }, []);
  return (
    <Provider store={store}>
      <GlobalProvider>
        <Main />
      </GlobalProvider>
    </Provider>
  );
}
