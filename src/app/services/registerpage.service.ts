import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class RegisterpageService {

  constructor() { }

  private registerData = new BehaviorSubject([]);
  registerDataObv = this.registerData.asObservable();

  changeregisterData(data:any){
    this.registerData.next(data);
  }
}
