import { Component, OnInit } from '@angular/core';
import { MainCardService } from './services/main-card.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private _service : MainCardService){}
  varpathname :any = ''

  ngOnInit(){

    this.varpathname = window.location.pathname
    this._service.changelocationObv(this.varpathname);
    // this._service.locationObv.subscribe()
    this._service.locationObv.subscribe((data: any) => {
      this.varpathname = data;
    });
    console.log("jcbwebjc", this._service.changeLoginFlagObv, this._service.locationObv)
  }
}


