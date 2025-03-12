import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainCardService } from '../../../services/main-card.service';

@Component({
  selector: 'app-sp-menu',
  templateUrl: './sp-menu.component.html',
  styleUrls: ['./sp-menu.component.scss']
})
export class SpMenuComponent implements OnInit {

  homeClicked: boolean = false;
  opportunityClicked: boolean = false;
  configuratorClicked: boolean = false;
  sowClicked: boolean = false;
  aboutClicked: boolean = false;
  contactClicked: boolean = false;

  menuLink:any =  window.location.pathname

  constructor(private router: Router,private _service: MainCardService) { }

  ngOnInit(): void {
    // console.log(this.router);
    console.log("menuLink", this.menuLink)
  }


  goToSowPage(){
    this._service.changeSowToggleFlagObv(true);
  }

  goToConfig(){
    this._service.changeconfigToggleFlagObv(true);

  }
  changeConfigToggleFlag(){
    this._service.changeconfigToggleFlagObv(false);

  }

  changeSowToggleFlag(){
    this._service.changeSowToggleFlagObv(false);
  }
}
