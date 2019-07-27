import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
          }
        }
      ]
    }
  };
  // public barChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', 'to the future'];
  public barChartLabels: Label[] = ['2015'];
  // public barChartType: ChartType = 'bar';
  public barChartType: ChartType = 'line';
  public barChartLegend = false;

  front2015 = 0;
  front2016 = 0;
  front2017 = 0;
  front2018 = 0;
  front2019 = 0;
  frontFuture = 0;

  back2015 = 0;
  back2016 = 0;
  back2017 = 0;
  back2018 = 0;
  back2019 = 0;
  backFuture = 0;

  /*
  { data: [0, 0, 30, 60, 80, 100], label: 'FrontEnd' },
    { data: [20, 40, 60, 70, 70, 80], label: 'BackEnd' }
  */

  public barChartData: ChartDataSets[] = [
    { data: [this.front2015, this.front2016, this.front2017, this.front2018, this.front2019, this.frontFuture], label: 'FrontEnd' },
    { data: [this.back2015, this.back2016, this.back2017, this.back2018, this.back2019, this.backFuture], label: 'BackEnd' }
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.showElements();
    }, 10);
  }

  async showElements() {
    const year = document.getElementById('year');

    let time = 1000; // THis is the time when start the process
    const latency = 1500; // This is the latency of each element
    await setTimeout(() => {
      year.innerHTML = '2015';
      this.front2015 = 0;
      this.back2015 = 20;
      this.changeData();
    }, time);
    await setTimeout(() => {
      year.innerHTML = '2016';
      this.front2016 = 0;
      this.back2016 = 40;
      this.barChartLabels.push('2016');
      this.changeData();
    }, time = time + latency);
    await setTimeout(() => {
      year.innerHTML = '2017';
      this.front2017 = 30;
      this.back2017 = 60;
      this.barChartLabels.push('2017');
      this.changeData();
    }, time = time + latency);
    await setTimeout(() => {
      year.innerHTML = '2018';
      this.front2018 = 60;
      this.back2018 = 70;
      this.barChartLabels.push('2018');
      this.changeData();
    }, time = time + latency);
    await setTimeout(() => {
      year.innerHTML = '2019';
      this.front2019 = 80;
      this.back2019 = 70;
      this.barChartLabels.push('2019');
      this.changeData();
    }, time = time + latency);
    await setTimeout(() => {
      year.innerHTML = 'the future';
      this.frontFuture = 100;
      this.backFuture = 80;
      this.barChartLabels.push('to the future');
      this.changeData();
      year.className = 'infinite';

    }, time = time + latency);
  }

  changeData() {
    this.barChartData = [
    { data: [this.front2015, this.front2016, this.front2017, this.front2018, this.front2019, this.frontFuture], label: 'FrontEnd' },
    { data: [this.back2015, this.back2016, this.back2017, this.back2018, this.back2019, this.backFuture], label: 'BackEnd' }
    ];
  }


    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

}
