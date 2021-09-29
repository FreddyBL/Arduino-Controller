import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "./Button";
const ChoiceButtons = (props) => {
  const {
    onChoiceSelected,
    color,
    selectedColor,
    fontSize,
    choices,
    defaultChoice,
    vertical,
    gap,
    value,
  } = props;

  const handlePress = (choice) => {
    onChoiceSelected(choice);
  };

  const flexDirection = vertical ? "column" : "row";
  const gapStyles = {
    marginRight: vertical ? 0 : gap,
    marginTop: vertical ? gap : 0,
  };
  return (
    <View
      {...props}
      style={{
        display: "flex",
        flexDirection: flexDirection,
      }}
    >
      {choices.map((choice) => {
        const paintColor = choice === value ? selectedColor : color;
        return (
          <Button
            style={gapStyles}
            onPress={() => handlePress(choice)}
            key={choice}
            fsize={fontSize}
            title={choice}
            color={paintColor}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChoiceButtons;
