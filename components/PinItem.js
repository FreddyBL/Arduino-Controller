import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "./Button";

import StyledSlider from "./StyledSlider";
import ChoiceButtons from "./ChoiceButtons";
import { PinModesArray } from "../constants/pins";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  setPeriod,
  setPinMode,
  setUnit,
  setDutyCycle,
} from "./../redux/actions/pins";
import { useGlobalContext } from "../GlobalContext";
import ModeSelector from "./ModeSelector";

const PinItem = ({ pin }) => {
  const { ws, isConnected } = useGlobalContext();
  const dispatch = useDispatch();
  const pinSettings = useSelector(({ pins }) => {
    return pins[pin];
  });
  if (isConnected) {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.controlsContainer}>
          <View style={styles.controlsHeader}>
            <Text style={styles.pinText}>Pin {pin}</Text>
          </View>
          <View style={styles.controlsBtnContainer}>
            <ModeSelector pin={pin}></ModeSelector>
          </View>
        </View>

        {/* PWM Area */}
        <View style={styles.controlsContainer}>
          <View style={styles.controlsHeader}>
            <Text style={styles.controlsLabel}>PWM Settings</Text>
          </View>

          <View style={[styles.rowContainer, styles.colGap]}>
            <Text style={[styles.controlsLabel, styles.bold]}>Period:</Text>
            <Text style={[styles.controlsLabel, styles.rowGap]}>
              {pinSettings.period}
            </Text>
            <View style={styles.rowGap}>
              <ChoiceButtons
                color="#7D7D7D"
                selectedColor="#FF3D31"
                fontSize={"11px"}
                choices={["ms", "us"]}
                gap={2.9}
                onChoiceSelected={(choice) =>
                  dispatch(setUnit(ws, pin, choice))
                }
                value={pinSettings.unit}
              />
            </View>
          </View>
          <StyledSlider
            value={pinSettings.period}
            onValueChange={(value) => dispatch(setPeriod(ws, pin, value))}
            style={[styles.colGap]}
            maximumValue={pinSettings.periodMax}
            minimumValue={pinSettings.periodMin}
            step={pinSettings.periodStep}
            height={7}
            color="#58F7AB"
          />
          <View style={[styles.colGap, styles.rowContainer]}>
            <Text style={styles.controlsLabel}>Duty Cycle:</Text>
            <Text style={[styles.controlsLabel, styles.rowGap]}>
              {pinSettings.dutyCycle}%
            </Text>
          </View>
          <StyledSlider
            value={pinSettings.dutyCycle}
            onValueChange={(value) => dispatch(setDutyCycle(ws, pin, value))}
            maximumValue={100}
            minimumValue={0}
            step={pinSettings.dutyCycleStep}
            style={[styles.colGap]}
            height={7}
            color="#F7D458"
          />
        </View>
      </View>
    );
  }
  return <View />;
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: "rgba(1, 16, 7, 0.72)",
    display: "flex",
    flexDirection: "row",
    padding: 7,
    marginBottom: 10,
  },
  text_h1: {
    color: "white",
  },
  controlsContainer: {
    backgroundColor: "#000000",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginHorizontal: 3,
    padding: 9,
  },
  controlsHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  colGap: {
    marginTop: 6,
  },
  rowGap: {
    marginLeft: 6,
  },
  pinText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 13,
    color: "white",
  },
  controlsLabel: {
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontSize: 11,
    color: "white",
  },
  bold: {
    fontWeight: "bold",
  },
  controlsBtnContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  progressBar: {},
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pinsContainer: {
    flex: 1,
    backgroundColor: "#495558",
    height: "100%",
    margin: 14,
  },
  headerTxt: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "bold",
  },
  statusTxt: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#1DAB6F",
    fontWeight: "normal",
  },
});

export default PinItem;
