import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addForm: FormGroup;
  submitted:boolean =false;
  constructor(private formBuilder:FormBuilder, private router: Router,private usersService :UsersService) { }

  ngOnInit() {
    this.addForm=this.formBuilder.group({
      firstName:['',[Validators.required,Validators.pattern("[A-Z][a-z]{3,25}")]],
      lastName:['', Validators.required],
      age:['',[Validators.required, Validators.min(20),Validators.max(30)]],
      mobileNumber:['',[Validators.required, Validators.pattern('[6-9][0-9]{9}')]],
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    });

    if(localStorage.email==null){
      this.router.navigate(['/login']);
    }
  }
  addUser(){
    this.submitted=true;
    if(this.addForm.invalid){
      return;
    }
    console.log(this.addForm.value);

    this.usersService.addUser(this.addForm.value).subscribe(data=>{
      alert(`${this.addForm.controls.firstName.value} record is added successfully..!`);
      this.router.navigate(['list-user']);
    },err=>{
      console.log(err.stack);
    })
  }

}
