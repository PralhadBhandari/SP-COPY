import { Component, OnInit } from '@angular/core';
import boi from '../../_files/boi.json';
import {Chart, registerables} from 'node_modules/chart.js';
Chart.register(...registerables)

@Component({

  selector: 'app-bar-chart',
  templateUrl: './boi.component.html',
  styleUrls: ['./boi.component.scss']
})
export class BoiComponent implements OnInit  {
  Boi : any
  marketGroupDetails:any=[]
  demoVar :any =[]
  lineItem:any=[]

  ngOnInit(): void {
    this.Boi = boi
    this.marketGroupDetails = boi.root.marketGroupDetails
    console.log(this.marketGroupDetails);


  }


}
