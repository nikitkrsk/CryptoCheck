import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { WebsocketService } from "../services/websocket.service";
import { ChatService } from "../services/chat.service";
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: [WebsocketService, ChatService]
})
export class ChartComponent implements OnInit {
  getDate() {
    let today = new Date();
    let hh = String(today.getHours())
    let min = String(today.getMinutes())
    let sec = String(today.getSeconds())

    let date = `${hh}:${min}:${sec} `
    return date
  }
  //crypto names - doesn't work to check after
  // cryptoNames: Array<string> = [
  //    "lineChartDataBit",
  //   "lineChartDataEth",
  // ]
  //bitcoin
  bitcoinDate: Array<string> = []
  bitcoinPrice: Array<number> = []
  //ethereum
  ethereumDate: Array<string> = []
  ethereumPrice: Array<number> = []
  //monero
  moneroDate: Array<string> = []
  moneroPrice: Array<number> = []
  //litecoin
  litecoinDate: Array<string> = []
  litecoinPrice: Array<number> = []

  constructor(private chatService: ChatService) {
    chatService.messages.subscribe(msg => {
      //bitcoin
      this.bitcoinDate.length >= 50 ? (this.bitcoinDate.splice(0, 5), this.bitcoinPrice.splice(0, 5)) : '';
      msg.bitcoin != null ? (this.bitcoinPrice.push(msg.bitcoin), this.bitcoinDate.push(this.getDate())) : '';
      //ethereum
      this.ethereumDate.length >= 50 ? (this.ethereumDate.splice(0, 5), this.ethereumPrice.splice(0, 5)) : '';
      msg.ethereum != null ? (this.ethereumPrice.push(msg.ethereum), this.ethereumDate.push(this.getDate())) : '';
      //monero
      this.moneroDate.length >= 50 ? (this.moneroDate.splice(0, 5), this.moneroPrice.splice(0, 5)) : '';
      msg.monero != null ? (this.moneroPrice.push(msg.monero), this.moneroDate.push(this.getDate())) : '';
      //litecoin
      this.litecoinDate.length >= 50 ? (this.litecoinDate.splice(0, 5), this.litecoinPrice.splice(0, 5)) : '';
      msg.litecoin != null ? (this.litecoinPrice.push(msg.litecoin), this.litecoinDate.push(this.getDate())) : '';
    });
  }
  //bitcoin
  lineChartDataBit: ChartDataSets[] = [
    { data: this.bitcoinPrice, label: 'Bitcoin' }
  ];
  lineChartLabelsBit: Label[] = this.bitcoinDate;
  //etherium
  lineChartDataEth: ChartDataSets[] = [
    { data: this.ethereumPrice, label: 'Etherium' }
  ];
  lineChartLabelsEth: Label[] = this.ethereumDate;
  //monero
  lineChartDataMon: ChartDataSets[] = [
    { data: this.moneroPrice, label: 'Monero' }
  ];
  lineChartLabelsMon: Label[] = this.moneroDate;
  //litecoin
  lineChartDataLit: ChartDataSets[] = [
    { data: this.litecoinPrice, label: 'Litecoin' }
  ];
  lineChartLabelsLit: Label[] = this.litecoinDate;


  //chart config
  lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'right',
          gridLines: {
            color: 'rgba(0,0,0,0.3)',
          },
          ticks: {
            fontColor: 'white',
          }
        },
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'white',
          borderWidth: 2,
        },
      ],
    },
  };
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  ngOnInit() {
  }
}
