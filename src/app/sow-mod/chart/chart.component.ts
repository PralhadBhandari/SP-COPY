import { Component, Input, OnInit } from '@angular/core';
// have to remove this import and get data from boi using @Import
// import boi from '../../_files/boi.json';
import {Chart, registerables} from 'node_modules/chart.js';
Chart.register(...registerables)

@Component({
  // standalone: true,
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

@Input() dataFromParent:any

  constructor(){}
  chartLcData : any
  chartMlData : any

  chartLabel : any = []
  chartValue : any = []

  mlchartLabel : any = []
  mlchartValue : any = []

  ngOnInit(){
    console.log("dataFromParent",this.dataFromParent)
  this.dataInitialization()
  this.renderChart(this.chartLabel, this.chartValue)
  this.renderMlChart(this.mlchartLabel, this.mlchartValue)

  console.log("this.chartData",this.chartLcData)
  console.log("this.labelData", this.chartLabel)
  console.log("this.chartValue", this.chartValue)
 }

 dataInitialization(){
  this.chartLcData = this.dataFromParent.root.chartDetails[0].chartData
  this.chartMlData = this.dataFromParent.root.chartDetails[1].chartData

  this.chartLcData.forEach((element: any) => {
    this.chartLabel.push(element.itemName)
    this.chartValue.push(element.itemCost_Bid)
  });

  this.chartMlData.forEach((element: any) => {
    this.mlchartLabel.push(element.itemName)
    this.mlchartValue.push(element.itemCost_Bid)
  });
 }

 renderChart(label: any , dataValue: any ){
  const ctx = document.getElementById('myChart');
  new Chart('myChart', {
    type: 'pie',
    data: {
      // labels are on top eg. NP2639
      labels: label  ,
      datasets: [{
        label: '# of Votes',
        // have to change this
        data: dataValue,
        borderWidth: 1
      }]
    },
    options: {
      // for positioning of label on rigt side
      plugins: {
        legend: {
          display: true,
          position: 'right'
        }
      }
    }
  });
 }

 renderMlChart(label: any , dataValue: any ){
  const ctx = document.getElementById('myMlChart');
  new Chart('myMlChart', {
    type: 'pie',
    data: {
      // labels are on top eg. NP2639
      labels: label  ,
      datasets: [{
        label: '# of Votes',
        // have to change this
        data: dataValue,
        borderWidth: 1
      }]
    },
    options: {
      // for positioning of label on rigt side
      plugins: {
        legend: {
          display: true,
          position: 'right'
        }
      }
    }
  });
 }
}
