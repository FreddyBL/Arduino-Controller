export const sendMessage = (ws, type, payload) => {
  ws.send(JSON.stringify({ type, payload }));
};

export const onMessageReceived = (ws, type, payload) => {
  console.log(type, payload);
  switch (type) {
    case "arduino/res_listports": {
      console.log(payload);
    }
    case "arduino/getconfig": {
      console.log(payload);
    }
  }
};
