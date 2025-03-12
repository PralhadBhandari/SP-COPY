import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NbContextMenuDirective, NbSidebarService } from '@nebular/theme';
import { MainCardService } from '../../../services/main-card.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

   linkAddress : any
   user: any = {};
   sowToggleFlag : boolean =false
   loginFlag : boolean = false
   configToggleFlag : boolean = false

  constructor(private _service: MainCardService,private router: Router){}

  ngOnInit(): void {
    console.log('window.location.pathname',this.linkAddress)

    this._service.locationObv.subscribe((data: any) => {
      this.linkAddress = data;
    });
    this._service.sowToggleFlagObv.subscribe((data: any) => {
      this.sowToggleFlag = data;
    });
    this._service.configToggleFlagObv.subscribe((data: any) => {
      this.configToggleFlag = data;
    });

    let userList: any = localStorage.getItem('registerList');
    let list = JSON.parse(userList);

    const currentUser: any = localStorage.getItem('Current User');
    let user1: any = JSON.parse(currentUser);

    this.user = list.find(
      (element: any) => element.email == user1.email
    );
  }

  onLogout(){
    localStorage.removeItem('Current User')
    this._service.changeLoginFlagObv(true);
  }

changeConfigToggleFlag(){
  this.configToggleFlag = false
  this._service.changeconfigToggleFlagObv(this.sowToggleFlag);
  this.router.navigate(['opportunities'])

}
  changesowToggleFlag(){
    this.sowToggleFlag = false
    this._service.changeSowToggleFlagObv(this.sowToggleFlag);
    this.router.navigate(['opportunities'])
    // console.log(" Onclickkk  this.sowToggleFlag",this._service.sowToggleFlagObv)
  }
}
