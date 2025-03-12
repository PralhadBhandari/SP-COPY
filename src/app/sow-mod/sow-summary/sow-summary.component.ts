import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { MainCardService } from '../../services/main-card.service';

@Component({
  selector: 'app-sow-summary',
  templateUrl: './sow-summary.component.html',
  styleUrls: ['./sow-summary.component.scss']
})
export class SowSummaryComponent implements OnInit {
  isClicked : boolean = false
  clicked=false
  activeSowLink: string = '';
  // varpathname:any
  sowLink:any =  window.location.pathname
  userName=sessionStorage.getItem('userName')
  // isClicked:true
  localdata:any=localStorage.getItem('publish'); // get publish
  parselocalData=JSON.parse(this.localdata)


localDataValue : any = {}


totalIO : any = '';
additionTotalIo :any = '';
additionHwlIo :any = '';
additionIntelligentIo : any = '';
sumCabinate :any = ''
constructor(private _service : MainCardService, private router:Router){}

  ngOnInit(): void {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.activeSowLink = event.url; // update activeSowLink based on the active route
        }
      });

      this._service.changelocationObv(window.location.pathname)

    console.log("sowLink", this.sowLink)
  console.log("isClicked:", this.isClicked)
  // let changedClickFlag = true
  this.isClicked =  true;
  // this.varpathname = window.location.pathname
  //   this._service.changelocationObv(this.varpathname);
  //   console.log("jcbwebjc", this._service.changeLoginFlagObv, this._service.locationObv)

  console.log("isClicked:", this.isClicked )

    console.log(window.location.href)
    let localdata:any = localStorage.getItem('publish')
    let parselocaldata = JSON.parse(localdata)
    this.localDataValue = parselocaldata
    this.additionTotalIo = Number(parselocaldata.io[0].ai) +Number(parselocaldata.io[0].ao) +Number(parselocaldata.io[0].di) +Number(parselocaldata.io[0].do) +Number(parselocaldata.io[0].universal) +Number(parselocaldata.io[0].other)
    this.additionHwlIo = Number(parselocaldata.io[1].ai) +Number(parselocaldata.io[1].ao) +Number(parselocaldata.io[1].di) +Number(parselocaldata.io[1].do) +Number(parselocaldata.io[1].universal) +Number(parselocaldata.io[1].other)
    this.additionIntelligentIo =   Number(parselocaldata.io[2].ai) + Number(parselocaldata.io[2].ao) +Number(parselocaldata.io[2].di) +Number(parselocaldata.io[2].do) +Number(parselocaldata.io[2].universal) +Number(parselocaldata.io[2].other)

    this.totalIO = this.additionTotalIo +this.additionHwlIo +this.additionIntelligentIo


    this.sumCabinate =  Number(this.localDataValue.cabinate[0].io) + Number(this.localDataValue.cabinate[1].control) + Number(this.localDataValue.cabinate[2].supervisory) + Number(this.localDataValue.cabinate[3].enterprise)

    console.log("this.totalIO",this.localDataValue.cabinate)

}
changeIcon(){
  this.isClicked=  !this.isClicked
}
changeIcons(){
  this.clicked=!this.clicked
}

}
