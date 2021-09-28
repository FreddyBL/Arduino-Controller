import React from "react";
import { View, Text } from "react-native";
import { Slider } from "react-native-elements";

export default function StyledSlider(props) {
  console.log(props.height);
  const height = props.height ? props.height : 11;
  const radius = height + 4;
  return (
    <View {...props}>
      <Slider
        {...props}
        style={{
          height: height,
        }}
        trackStyle={{
          margin: 0,
          height: height,
          backgroundColor: props.color,
        }}
        thumbStyle={{
          height: radius,
          width: radius,
          backgroundColor: props.color,
        }}
        minimumTrackTintColor={props.color}
      />
    </View>
  );
}
