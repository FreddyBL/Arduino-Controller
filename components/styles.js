import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";

const colorBg = "#011007";
const colorBg2 = "#000000";
export const CardContainer = styled.View`
  flex: 1;
  background-color: "${colorBg}";
  display: flex;
  padding: 4px;
  flex-direction: row;
`;
export const ControlContainer = styled.View`
  background: ${colorBg2};
  display: flex;
  flex-direction: column;
  padding: 4px;
`;
