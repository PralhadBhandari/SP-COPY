import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { MustMatch } from './must-match-validator';
import { RegisterpageService } from '../../../services/registerpage.service';
import { MainCardService } from '../../../services/main-card.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.scss']
})
export class RegisterpageComponent implements OnInit {

  localdata:any = localStorage.getItem('registerList')
  parselocaldata = JSON.parse(this.localdata)

 registerForm :FormGroup | any;
 submitted = false;
 recordEmailIndex :any  = ''

 registerList: any[] =[]

 registerObj : any = {
  name :"",
  email:"",
  password:"",
 }

 showPassword = false;
 showConfirmPassword = false;

 getInputType() {
   if (this.showPassword) {
     return 'text';
   }
   return 'password';
 }
 getInputTypeConfirm() {
  if (this.showConfirmPassword) {
    return 'text';
  }
  return 'password';
}

 toggleShowPassword() {
   this.showPassword = !this.showPassword;
 }
 toggleShowConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }


  constructor(private formBuilder : FormBuilder , private router: Router , private _service: RegisterpageService, private _servicee: MainCardService){
  }

  ngOnInit() {

this._servicee.changelocationObv(window.location.pathname)
    // getting data from service
    this._service.registerDataObv.subscribe((data: any) => {
      this.registerList = data;
    });

    this.registerForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required,Validators.minLength(6)]],
        confirmPassword: ['', Validators.required ],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
    // console.log('this.registerList 1st',this.registerList)

  }


  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid ) {
      return;
    }

    this.registerObj.name = this.registerForm.value.name;
    this.registerObj.email = this.registerForm.value.email;
    this.registerObj.password = this.registerForm.value.password;

    var registerArray :any = this.parselocaldata;
    if(registerArray != null){
      let recordEmailIndex =  registerArray.find((element:any) => element.email == this.registerForm.value.email);
      this.recordEmailIndex  = recordEmailIndex
    }
    // let recordEmailIndex =  registerArray.find((element:any) => element.email == this.registerForm.value.email);

    if( this.recordEmailIndex){
      alert( "User with this email already exists !! ")
    }

    else{
    if (!this.registerForm.invalid&&( this.registerList == null || this.registerList != null)) {

      this.registerList.push(this.registerObj)

      this._service.changeregisterData(this.registerList);

      localStorage.setItem("registerList",  JSON.stringify(this.registerList))
      this.router.navigate(['login'])
    }
    }
  }
}


