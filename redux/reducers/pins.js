import { PinModes, UnitTypes } from "./../../constants/pins";
import { ActionTypes } from "./../../constants/actionTypes";
const initialState = [
  {
    mode: PinModes.ON,
    period: 1000,
    periodMin: 0,
    periodMax: 2000,
    periodStep: 1,
    unit: UnitTypes.ms,
    dutyCycle: 50,
    dutyCycleStep: 1,
    pinId: 0,
  },
  {
    mode: PinModes.OFF,
    period: 700,
    periodMin: 0,
    periodMax: 2000,
    periodStep: 1,
    unit: UnitTypes.ms,
    dutyCycle: 34,
    dutyCycleStep: 1,
  },
  {
    mode: PinModes.PWM,
    period: 500,
    periodMin: 0,
    periodMax: 2000,
    periodStep: 1,
    unit: UnitTypes.us,
    dutyCycle: 50,
    dutyCycleStep: 1,
  },
];

const reducer = (pinsState = initialState, action) => {
  switch (action.type) {
    case ActionTypes.setPeriod: {
      return pinsState.map((pin, idx) => {
        if (idx === action.payload.pinId) {
          const newPin = { ...pin };
          newPin.period = action.payload.period;
          return newPin;
        }
        return pin;
      });
    }
    case ActionTypes.setPinMode: {
      return pinsState.map((pin, idx) => {
        if (idx === action.payload.pinId) {
          const newPin = { ...pin };
          newPin.mode = action.payload.mode;
          return newPin;
        }
        return pin;
      });
    }
    case ActionTypes.setDutyCycle: {
      return pinsState.map((pin, idx) => {
        if (idx === action.payload.pinId) {
          const newPin = { ...pin };
          newPin.dutyCycle = action.payload.dutyCycle;
          return newPin;
        }
        return pin;
      });
    }
    case ActionTypes.setUnit: {
      return pinsState.map((pin, idx) => {
        if (idx === action.payload.pinId) {
          const newPin = { ...pin };
          newPin.unit = action.payload.unit;
          return newPin;
        }
        return pin;
      });
    }
    case ActionTypes.setState: {
      return action.payload.state;
    }
    default:
      return pinsState;
  }
};

export default reducer;
