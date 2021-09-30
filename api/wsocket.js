export const sendMessage = (ws, type, payload) => {
  ws.send(JSON.stringify({ type, payload }));
};

export const onMessageReceived = (ws, type, payload) => {
  switch (type) {
    case "arduino/res_listports": {
    }
    case "arduino/getconfig": {
    }
  }
};
