import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
// for login validation
import { Router } from '@angular/router';
import { CredmustMatch } from './cred-validator';
import { MainCardService } from '../../../services/main-card.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit  {

  // we add router for Login validation
  constructor(private formBuilder: FormBuilder,private router: Router, private _service: MainCardService ) {}

  // loginFlag :boolean = false
  showPassword = false;

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  loginForm: FormGroup | any;
  submitted = false;

 loginObj : any = {

     email:"",
     password:"",
 }

    localdata:any = localStorage.getItem('registerList')
    parselocaldata = JSON.parse(this.localdata)



  ngOnInit() {

    this._service.changelocationObv(window.location.pathname)
    // console.log("localdata",this.parselocaldata)
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required ,Validators.minLength(6)]],
      }
    );

  }

  get f() {
    return this.loginForm.controls;
  }


  setCurrentUserData ( ){
// if user not registered
if( this.localdata == null ){
  alert("Please register first")
  // console.log('local storage value ', this.localdata)
}
this.submitted = true
    // console.log('local storage value ', this.localdata)
    var registerArray :any = this.parselocaldata

    this.loginObj.email =  this.loginForm.value.email
    this.loginObj.password = this.loginForm.value.password
    let  userFound = registerArray.find((element:any) => element.email == this.loginForm.value.email);


 if(this.parselocaldata != null ){
      if(userFound && userFound.password ==this.loginForm.value.password ){
        alert( 'Login Successful')
            // storing the Current User in the local storage
            this.router.navigate(['opportunities'])

            localStorage.setItem("Current User",  JSON.stringify(this.loginObj))

            // for lazy loading
            // this.loginFlag = false
            this._service.changeLoginFlagObv(false);
            // console.log( this._service.loginFlagObv)

          }
      else{
        alert('Invalid Credentials')
      }
}

  }

}
