import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'graficos';

  @ViewChild("pizza", { static: true }) pizza: ElementRef;
  @ViewChild("line", { static: true }) line: ElementRef;

 meses: any = [ 
   {
    label:"Janeiro",
    data: [85, 72, 86, 81, 84, 86, 94, 60, 62, 65, 41, 58],
    borderColor: '#00AEFF',
    fill: false
  },
  {
    label:"Fevereiro",
    data: [33, 38, 10, 93, 68, 50, 35, 29, 34, 2, 62, 4],
    borderColor: '#FFCC00',
    fill: false
  }
  ,
  {
    label:"Março",
    data: [33, 38, 10, 93, 68, 50, 35, 29, 34, 2, 62, 4],
    borderColor: '#FFCC00',
    fill: false
  },
  {
    label:"Abril",
    data: [33, 38, 10, 93, 68, 50, 35, 29, 34, 2, 62, 4],
    borderColor: '#FFCC00',
    fill: false
  },
  {
    label:"Maio",
    data: [33, 38, 10, 93, 68, 50, 35, 29, 34, 2, 62, 4],
    borderColor: '#FFCC00',
    fill: false
  },
  {
    label:"Junho",
    data: [33, 38, 10, 93, 68, 50, 35, 29, 34, 2, 62, 4],
    borderColor: '#FFCC00',
    fill: false
  },
  {
    label:"Julho",
    data: [33, 38, 10, 93, 68, 50, 35, 29, 34, 2, 62, 4],
    borderColor: '#FFCC55',
    fill: false
  },
  {
    label:"Agosto",
    data: [33, 38, 10, 93, 68, 50, 35, 29, 34, 2, 62, 4],
    borderColor: '#FFCC55',
    fill: false
  },
  {
    label:"Setembro",
    data: [33, 38, 10, 93, 68, 50, 35, 29, 34, 2, 62, 4],
    borderColor: '#FFCC55',
    fill: false
  },
  {
    label:"Outubro",
    data: [33, 38, 10, 93, 68, 50, 35, 29, 34, 2, 62, 4],
    borderColor: '#FFCC55',
    fill: false
  },
  {
    label:"Novembro",
    data: [33, 38, 10, 93, 68, 50, 35, 29, 34, 2, 62, 4],
    borderColor: '#FFCC55',
    fill: false
  },
  {
    label:"Dezembro",
    data: [33, 38, 10, 93, 68, 50, 35, 29, 34, 2, 62, 4],
    borderColor: '#FFCC55',
    fill: false
  }
];


  /* Configuração do gráfico */
  configLine: any = {
    type: 'line',
    data: {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      datasets: this.meses
    },
    options: {}
  }

  // Config Pizza
  configPizza: any = {
    data: {
      labels: [
        'Vendas',
        'Pendentes',
        'Devolução',
        'Promoções'
      ],
      datasets: [{
        label: 'Vendas da empresa',
        data: [60, 10, 20, 10],
        backgroundColor: [
          'rgb(37, 168, 65)',
          'rgb(207, 219, 30)',
          'rgb(231, 29, 46)',
          'rgb(175, 26, 168)'
        ],
        hoverOffset: 4
      }]
    }
  }

  constructor() {
  }

  ngOnInit() {
    this.initGraficos();
  }

  initGraficos() {
    // pizza
    new Chart(this.pizza.nativeElement, {
      type: 'doughnut',
      data: this.configPizza.data,
      options: {}
    });

    // line
    new Chart(this.line.nativeElement, this.configLine);
  }
}

