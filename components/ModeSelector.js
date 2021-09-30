import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useGlobalContext } from "../GlobalContext";
import { PinModesArray } from "../constants/pins";
import { useDispatch } from "react-redux";
import ChoiceButtons from "./ChoiceButtons";
import { useSelector } from "react-redux";
import { setPinMode } from "../redux/actions/pins";
export default function ModeSelector({ pin }) {
  const { ws } = useGlobalContext();
  const dispatch = useDispatch();
  const mode = useSelector(({ pins }) => {
    return pins[pin].mode;
  });
  return (
    <View>
      <ChoiceButtons
        color="#7D7D7D"
        selectedColor="#3531FF"
        fontSize={"13px"}
        choices={PinModesArray}
        gap={2.9}
        onChoiceSelected={(choice) => dispatch(setPinMode(ws, pin, choice))}
        value={mode}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
