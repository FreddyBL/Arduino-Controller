import { ActionTypes } from "./../../constants/actionTypes";

export const setPinMode = (pinId, mode) => async (dispatch) => {
  dispatch({ type: ActionTypes.setPinMode, payload: { pinId, mode } });
};

export const setPeriod = (pinId, period) => async (dispatch) => {
  dispatch({ type: ActionTypes.setPeriod, payload: { pinId, period } });
};

export const setUnit = (pinId, unit) => async (dispatch) => {
  dispatch({ type: ActionTypes.setUnit, payload: { pinId, unit } });
};

export const setDutyCycle = (pinId, dutyCycle) => async (dispatch) => {
  dispatch({ type: ActionTypes.setDutyCycle, payload: { pinId, dutyCycle } });
};
