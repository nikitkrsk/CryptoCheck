import { Component } from '@angular/core';
import { WebsocketService } from "../services/websocket.service";
import { ChatService } from "../services/chat.service";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
  providers: [WebsocketService, ChatService]
})
export class CurrencyComponent {
    bitcoin: number;
    bitcoinStatus: number = 2;
  
    ethereum: number;
    ethereumStatus: number = 2;
  
    monero: number;
    monerStatus: number = 2;
  
    litecoin: number;
    litecoinStatus: number = 2;
  
    ripple: number;
    rippleStatus: number  = 2;
    
    stellar: number;
    stellarStatus: number = 2;
  
    tron: number;
    tronStatus: number = 2;
  
    cardano: number;
    cardanoStatus: number = 2;
    
    constructor(private chatService: ChatService) {
      chatService.messages.subscribe(msg => {
        msg.bitcoin > this.bitcoin ? this.bitcoinStatus = 0 : this.bitcoinStatus = 1
        this.bitcoin = msg.bitcoin != null ? msg.bitcoin : this.bitcoin;
  
        msg.ethereum > this.ethereum ? this.ethereumStatus = 0 : this.ethereumStatus = 1
        this.ethereum = msg.ethereum != null ? msg.ethereum : this.ethereum;
        
        msg.monero > this.monero ? this.monerStatus = 0 : this.monerStatus = 1
        this.monero = msg.monero != null ? msg.monero : this.monero;
        
        msg.litecoin > this.litecoin ? this.litecoinStatus = 0 : this.litecoinStatus = 1
        this.litecoin = msg.litecoin != null ? msg.litecoin : this.litecoin;
        
        msg.ripple > this.ripple ? this.rippleStatus = 0 : this.rippleStatus = 1
        this.ripple = msg.ripple != null ? msg.ripple : this.ripple;
        
        msg.stellar > this.stellar ? this.stellarStatus = 0 : this.stellarStatus = 1
        this.stellar = msg.stellar != null ? msg.stellar : this.stellar;
        
        msg.tron > this.tron ? this.tronStatus = 0 : this.tronStatus = 1
        this.tron = msg.tron != null ? msg.tron : this.tron;
        
        msg.cardano > this.cardano ? this.cardanoStatus = 0 : this.cardanoStatus = 1
        this.cardano = msg.cardano != null ? msg.cardano : this.cardano;
      });
    }
    checkColor(par){
      return par == 1 ? '#B81118' : '#00864B'
    }
  }
  


