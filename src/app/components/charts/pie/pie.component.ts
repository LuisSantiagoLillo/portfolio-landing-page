import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
// Pie
public pieChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'right',
  },
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        const label = ctx.chart.data.labels[ctx.dataIndex];
        return label;
      },
    },
  }
};
public pieChartLabels: Label[] = [['Angular', 'VUE'], ['HTML', 'CSS', 'SASS'], ['Redux', 'SW', 'Sockets'], ['Node, Express, MongoDB, JWT']];
public pieChartData: number[] = [500, 400, 200, 300];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartColors = [
  {
    backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
  },
];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.showElements();
    }, 10);
  }

   async showElements() {
    const front = document.getElementById('front');
    const interfaces = document.getElementById('interfaces');
    const angular = document.getElementById('angular');
    const vue = document.getElementById('vue');
    const spa = document.getElementById('spa');
    const redux = document.getElementById('redux');
    const sw = document.getElementById('sw');
    const sockets = document.getElementById('sockets');
    const back = document.getElementById('back');
    const node = document.getElementById('node');
    const express = document.getElementById('express');


    let time = 1000; // THis is the time when start the process
    const latency = 400; // This is the latency of each element
    await setTimeout(() => {
      front.className = 'showElement';
    }, time);
    await setTimeout(() => {
      front.className = '';
    }, time = time + latency);

    await setTimeout(() => {
      interfaces.className = 'showElement';
    }, time = time + latency);
    await setTimeout(() => {
      interfaces.className = '';
    }, time = time + latency);

    await setTimeout(() => {
      angular.className = 'showElement';
    }, time = time + latency);
    await setTimeout(() => {
      angular.className = '';
    }, time = time + latency);

    await setTimeout(() => {
      vue.className = 'showElement';
    }, time = time + latency);
    await setTimeout(() => {
      vue.className = '';
    }, time = time + latency);

    await setTimeout(() => {
      spa.className = 'showElement';
    }, time = time + latency);
    await setTimeout(() => {
      spa.className = '';
    }, time = time + latency);

    await setTimeout(() => {
      redux.className = 'showElement';
    }, time = time + latency);
    await setTimeout(() => {
      redux.className = '';
    }, time = time + latency);

    await setTimeout(() => {
      sw.className = 'showElement';
    }, time = time + latency);
    await setTimeout(() => {
      sw.className = '';
    }, time = time + latency);

    await setTimeout(() => {
      sockets.className = 'showElement';
    }, time = time + latency);
    await setTimeout(() => {
      sockets.className = '';
    }, time = time + latency);

    await setTimeout(() => {
      back.className = 'showElement';
    }, time = time + latency);
    await setTimeout(() => {
      back.className = '';
    }, time = time + latency);

    await setTimeout(() => {
      node.className = 'showElement';
    }, time = time + latency);
    await setTimeout(() => {
      node.className = '';
    }, time = time + latency);

    await setTimeout(() => {
      express.className = 'showElement';
    }, time = time + latency);
    await setTimeout(() => {
      express.className = '';
    }, time = time + latency);
  }

   // events
   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
