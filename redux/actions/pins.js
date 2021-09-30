import { ActionTypes } from "./../../constants/actionTypes";
import { sendMessage } from "../../api/wsocket";
import { commands } from "../../arduino/api";
import { PinModes } from "../../constants/pins";
export const setPinMode = (ws, pinId, mode) => async (dispatch) => {
  sendMessage(ws, "arduino/cmd", {
    pinId,
    cmd: mode,
  });
  dispatch({ type: ActionTypes.setPinMode, payload: { pinId, mode } });
};

export const setPeriod = (ws, pinId, period) => async (dispatch) => {
  if (ws != null) {
    sendMessage(ws, "arduino/cmd", {
      pinId,
      cmd: "setPeriod",
      value: period,
    });
  }

  dispatch({ type: ActionTypes.setPeriod, payload: { pinId, period } });
};

export const setUnit = (ws, pinId, unit) => async (dispatch) => {
  sendMessage(ws, "arduino/cmd", {
    pinId,
    cmd: "setUnit",
    value: unit,
  });
  dispatch({ type: ActionTypes.setUnit, payload: { pinId, unit } });
};

export const setDutyCycle = (ws, pinId, dutyCycle) => async (dispatch) => {
  sendMessage(ws, "arduino/cmd", {
    pinId,
    cmd: "setDutyCycle",
    value: dutyCycle,
  });
  dispatch({ type: ActionTypes.setDutyCycle, payload: { pinId, dutyCycle } });
};

export const setState = (state) => async (dispatch) => {
  dispatch({ type: ActionTypes.setState, payload: { state } });
};
