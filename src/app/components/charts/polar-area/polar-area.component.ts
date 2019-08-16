import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-polar-area',
  templateUrl: './polar-area.component.html',
  styleUrls: ['./polar-area.component.css']
})
export class PolarAreaComponent implements OnInit {
// PolarArea
public ionicValue = 0;
public pwaValue = 0;
public flutterValue = 0;
public polarAreaChartLabels: Label[] = ['PWA', 'IONIC', 'Flutter'];
public polarAreaChartData: SingleDataSet = [this.pwaValue, this.ionicValue, this.flutterValue];
public polarAreaLegend = true;

public polarAreaChartType: ChartType = 'polarArea';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.showElements();
    }, 10);
  }

  async showElements() {
    let time = 1000; // THis is the time when start the process
    const latency = 1500; // This is the latency of each element
    await setTimeout(() => {
      this.ionicValue = 500;
      this.changeData();
    }, time);
    await setTimeout(() => {
      this.pwaValue = 400;
      this.changeData();
    }, time = time + latency);
    await setTimeout(() => {
      this.flutterValue = 200;
      this.changeData();
    }, time = time + latency);
  }

  changeData() {
    this.polarAreaChartData = [this.pwaValue, this.ionicValue, this.flutterValue];
  }


    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

}
