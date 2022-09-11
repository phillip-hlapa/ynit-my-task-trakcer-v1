import { Injectable } from '@angular/core';
import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Injectable({
  providedIn: 'root'
})
export class GraphService {



  @ViewChild('barCanvas', {static: true}) public barCanvas: ElementRef;
  barChart: any;

  constructor() { }





}
