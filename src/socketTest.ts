import io from "socket.io-client";

const test = () => {
  const client = io("wss://ws.blockchain.info/inv");
  client.connect();
  setTimeout(() => {
    console.log(client.connected);
  }, 5000);
};

export { test };
