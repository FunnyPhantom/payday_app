import Websocket from "ws";

export enum OPS {
  PING = "ping",
  ADDRESS_SUB = "addr_sub",
  ADDRESS_UNSUB = "addr_unsub",
}

type TPayload =
  | {
      op: OPS.PING;
    }
  | { op: OPS.ADDRESS_SUB | OPS.ADDRESS_UNSUB; addr: string };

class MSocket {
  private readonly connection: Websocket;

  private readonly _msgQ: string[];

  constructor() {
    this.connection = new Websocket("wss://ws.blockchain.info/inv", {});
    this._msgQ = [];
    this.connection.on("open", () => {
      let data;
      while ((data = this._msgQ.shift())) {
        this.connection.send(data);
      }
    });
  }

  public send = (data: TPayload) => {
    if (this.connection.readyState !== this.connection.OPEN)
      this._msgQ.push(JSON.stringify(data));
    else this.connection.send(JSON.stringify(data));
  };

  public addListener = (cb: (data: Record<string, unknown>) => any) => {
    const modifiedCb = function (data: ArrayBuffer, isBinary: boolean) {
      if (!isBinary) {
        cb(JSON.parse(data.toString()));
      }
    };
    this.connection.on("message", modifiedCb);
  };
  public removeListener = () => {
    this.connection.removeAllListeners("message");
  };
}

const blockChainClient = new MSocket();

export { blockChainClient };
