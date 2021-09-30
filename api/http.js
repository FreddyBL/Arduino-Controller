import axios from "axios";
import { SERVER_IP, HTTP_PORT } from "@env";

const url = `http://${SERVER_IP}:${HTTP_PORT}`;

export const isArduinoConnected = () =>
  axios.get(`${url}/is-arduino-connected`);
export const arduinoConnect = (port) =>
  axios.put(`${url}/connect-to-arduino`, port);
export const listCOMPorts = () => axios.get(`${url}/list-ports`);
