import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs/Rx";
import { WebsocketService } from "./websocket.service";

const CHAT_URL = "wss://ws.coincap.io/prices?assets=ALL";


export interface Message {
  bitcoin: number,
  ethereum: number,
  monero: number,
  litecoin: number,
  ripple: number,
  stellar: number,
  tron: number,
  cardano: number

}

@Injectable()
export class ChatService {
  public messages: Subject<Message>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<Message>>wsService.connect(CHAT_URL).map(
      (response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        return {
          bitcoin: data.bitcoin,
          ethereum: data.ethereum,
          monero: data.monero,
          litecoin: data.litecoin,
          ripple: data.ripple,
          stellar: data.stellar,
          tron: data.tron,
          cardano: data.cardano
        };
      }
    );
  }
}