import { blockChainClient } from "../io/BlockChainClient";

export const handler = () => {
  blockChainClient.addListener((data) => {
    switch (data.op) {
      case "pong": {
        console.log("!!Ponged!!");
        console.log(data);
        break;
      }
      case "utx": {
        console.log("message DATA!!!");
        console.log(data);
      }
      case undefined:
      default:
        console.warn("something wrong with data, check it out");
        console.log(data);
    }
  });
};
