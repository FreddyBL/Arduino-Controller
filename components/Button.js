import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  color: #fff;
  background-color: ${(props) => props.color};
  padding-top: 0px;
  padding-right: 6px;
  padding-left: 6px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnTxt = styled.Text`
  color: #fff;
  padding: 0px;
  font-size: ${(props) => props.fsize};
  margin: 0px;
`;

export default function Button({ style, title, color, fsize, onPress }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Container style={style} color={color}>
        <BtnTxt fsize={fsize ? fsize : "16px"}>{title}</BtnTxt>
      </Container>
    </TouchableOpacity>
  );
}
