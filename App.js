import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import reducers from "./redux/reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { GlobalProvider } from "./GlobalContext";
import Main from "./Main";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default function App() {
  return (
    <Provider store={store}>
      <GlobalProvider>
        <Main />
      </GlobalProvider>
    </Provider>
  );
}
