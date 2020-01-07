import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//programmatically navigating router to another router
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //instance variables
  //creating object of form grp class
  loginForm:FormGroup;
  //to check whether login button is clicked
  submitted:boolean=false;
  invalidLogin:boolean=false;
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
    });
  }
  verifyLogin(){
    this.submitted=true;
    //if validation failed for anyone of the contro thrn it will not execute code written after return
    if(this.loginForm.invalid)
      return;

      let email=this.loginForm.controls.email.value;
      let password=this.loginForm.controls.password.value;
      if(email==="admin@gmail.com" && password==="123456"){
        localStorage.email=email;
        this.router.navigate(['list-user']);
      }
      else{
        this.invalidLogin=true;
      }

  }

}
