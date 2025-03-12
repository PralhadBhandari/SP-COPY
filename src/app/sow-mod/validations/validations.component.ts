import { Component } from '@angular/core';
import validations from '../../_files/validations.json';
import { Chart, registerables } from 'node_modules/chart.js';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.scss'],
})
export class ValidationsComponent {
  constructor() {}

  workData: any;
  displayName: any = [];
  bidCostData : any = [];
  businessCostData : any = [];

  costToggleFlag: any = '';
  bidToggleFlag : boolean = true

  bidCostTotal: any = 0;
  bidCostTotalWithoutAC: any = 0
  bidtotalPercentage : any = 0
  bidtotalPerExcludeAC : any = 0

  businessCostTotal: any = 0;
  businessCostTotalWithoutAC: any = 0
  businesstotalPercentage : any = 0
  businesstotalPerExcludeAC: any = 0



  public myChart: Chart | any
  sowCostDetailsSum : any = 0

  ngOnInit() {
      this.bidData();
      this.businessData()
      this.sowData()
      this.toggleSwitch()

// console.log("this.businessCostTotal",this.businessCostTotal)
// console.log("this.businessCostTotalWithoutAC",this.businessCostTotalWithoutAC)
// console.log("this.businesstotalPercentage",this.businesstotalPercentage)
// console.log("this.businesstotalPerExcludeAC",this.businesstotalPerExcludeAC)
  }


  ngAfterViewInit() {
    Chart.register(...registerables);
  }

  sowData(){
    this.workData.sow_Details.forEach((element: any ) => {
      let price = 0;
      let enggPrice = 0;
      let totalPercentage = 0

      element.sowCostDetails.forEach((subelement: any) => {
        // console.log(' subelement.bid_cost',  subelement.bid_cost);
        price += Number(subelement.bid_cost);
      });
      element.bidTotalPrice = price;

      element.engineeringCostDetails.forEach((subelement: any) => {
        enggPrice += Number(subelement.bid_cost);
      });
      element.enggbidTotalPrice = enggPrice;

      element.engineeringCostDetails.forEach((subelement: any) => {
        totalPercentage += (Number(subelement.bid_cost) / Number(element.enggbidTotalPrice))*100
      });
      element.enggTotalPercentage = totalPercentage
    });
    console.log("Main Json : ",this.workData.sow_Details)
  }

  bidData() {

    let bidCostTotal = 0;
    // let businessCostTotal = 0;
    let additionalCost = 0
    const percentageList: any = [];

    this.workData = validations.root;

    this.workData.costSummary_Details.forEach((item: any) => {
      // for charts
      this.displayName.push(item.bucketName);
      this.bidCostData.push(item.bid_cost);
      this.businessCostData.push(item.business_cost)

      bidCostTotal = bidCostTotal + item.bid_cost;
      // businessCostTotal = businessCostTotal + item.business_cost;

      this.bidCostTotal = bidCostTotal;
      // this.businessCostTotal = businessCostTotal;
      // ~~ is used to convert NAN value to 0
      percentageList.push((~~(item.bid_cost / bidCostTotal) * 100));

      if(item.bucketName == 'Additional Costs'){
        additionalCost = item.bid_cost
      }

    });
    percentageList.forEach((element: any) => {
      this.bidtotalPercentage = this.bidtotalPercentage + element
    });

    this.bidCostTotalWithoutAC = this.bidCostTotal - additionalCost
    // console.log("this.bidCostTotalWithoutAC",this.bidCostTotalWithoutAC)

    let WACList : any = []
    let ACpercentageList : any =[]

    this.workData.costSummary_Details.forEach((item: any) => {
    if(item.bucketName != 'Additional Costs'){
     WACList.push(item.bid_cost)
     ACpercentageList.push((item.bid_cost/ this.bidCostTotalWithoutAC)*100)
    }

  });

  ACpercentageList.forEach((element:any) => {
    this.bidtotalPerExcludeAC= this.bidtotalPerExcludeAC + element

  });
  }

  businessData(){
    let businessCostTotal = 0;
    let businessadditionalCost = 0
    const businesspercentageList: any = [];

    this.workData.costSummary_Details.forEach((item: any) => {

      businessCostTotal = businessCostTotal + item.business_cost;

      this.businessCostTotal = businessCostTotal;
      // this.businessCostTotal = businessCostTotal;
      // ~~ is used to convert NAN value to 0
      businesspercentageList.push((~~(item.business_cost / businessCostTotal) * 100));

      if(item.bucketName == 'Additional Costs'){
        businessadditionalCost = item.business_cost
      }

    });
    businesspercentageList.forEach((element: any) => {
      this.businesstotalPercentage = this.businesstotalPercentage + element
    });

    this.businessCostTotalWithoutAC = this.businessCostTotal - businessadditionalCost
    // console.log("this.bidCostTotalWithoutAC",this.businessCostTotalWithoutAC)

    let businessWACList : any = []
    let businessACpercentageList : any =[]

    this.workData.costSummary_Details.forEach((item: any) => {
    if(item.bucketName != 'Additional Costs'){
      businessWACList.push(item.business_cost)
      businessACpercentageList.push((item.business_cost/ this.businessCostTotalWithoutAC)*100)
    }

  });

  businessACpercentageList.forEach((element:any) => {
    this.businesstotalPerExcludeAC= this.businesstotalPerExcludeAC + element

  });
  }

  toggleSwitch(){
    this.bidToggleFlag =! this.bidToggleFlag;
    if(this.bidToggleFlag==true){
      this.bidCostChart(this.displayName,this.businessCostData)
    } else {
      this.bidCostChart(this.displayName,this.bidCostData)
    }
  }

  bidCostChart(label: any, data:any) {
    if (this.myChart){
      this.myChart.destroy();
    }

     const ctx = document.getElementById('myBidChart');
     this.myChart = new Chart('myBidChart', {
        type: 'pie',
        data: {
          labels: label,
          datasets: [
            {
              data: data,
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'right',
            },
          },
        },
      });
  }

}
