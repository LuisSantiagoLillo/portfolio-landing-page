import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-text',
  templateUrl: './pie-text.component.html',
  styleUrls: ['./pie-text.component.css']
})
export class PieTextComponent implements OnInit {
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
    const ionic = document.getElementById('ionic');
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
      ionic.className = 'showElement';
    }, time = time + latency);
    await setTimeout(() => {
      ionic.className = '';
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

}
