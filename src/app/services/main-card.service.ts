import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MainCardService  {
  // BehaviorSubject is subject, a special type of observable in RxJS, that keeps track of the current value and emits it to new subscribers
  // The purpose of this is to prevent leaking the "observer side" of the Subject out of an API
  private FavouriteData = new BehaviorSubject([]);
  FavouriteDataObv = this.FavouriteData.asObservable();

  private HistoryData = new BehaviorSubject([]);
  HistoryDataObv = this.HistoryData.asObservable();

  private sowToggleFlag = new BehaviorSubject(false);
  sowToggleFlagObv = this.sowToggleFlag.asObservable();

  private configToggleFlag = new BehaviorSubject(false);
  configToggleFlagObv = this.configToggleFlag.asObservable();

  private registerFlag = new BehaviorSubject(false);
  registerFlagObv = this.registerFlag.asObservable();

  private loginFlag = new BehaviorSubject(true);
  loginFlagObv = this.loginFlag.asObservable();

  private location = new BehaviorSubject(true);
  locationObv = this.location.asObservable();

  changeFavouriteData(data:any){
  // next method is used to send messages to an observable which are
  // then sent to all angular components that are subscribers of that observable.
  this.FavouriteData.next(data);
}

  changeHistoryData(data:any){
  this.HistoryData.next(data);
}
  changeSowToggleFlagObv(data:any){
  this.sowToggleFlag.next(data);
}
changeconfigToggleFlagObv(data:any){
  this.configToggleFlag.next(data);
}
changeRegisterFlagObv(data:any){
  this.registerFlag.next(data);
}
changeLoginFlagObv(data:any){
  this.loginFlag.next(data);
}
changelocationObv(data:any){
  this.location.next(data);
}


}
