import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User[];
  editForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,private router: Router, 
    private userService: UsersService
) { }

  ngOnInit() {
    if(localStorage.getItem("email")!=null){
      let userId = localStorage.getItem("editUserId");
      if(!userId) {
        alert("Invalid action.")
        this.router.navigate(['list-user']);
        return;
      }
      this.editForm = this.formBuilder.group({
        id: [],
        firstName:['',[Validators.required,Validators.pattern("[A-Z][a-z]{3,25}")]],
        lastName:['', Validators.required],
        age:['',[Validators.required, Validators.min(20),Validators.max(30)]],
        mobileNumber:['',[Validators.required, Validators.pattern('[6-9][0-9]{9}')]],
        email:['',[Validators.required, Validators.email]],
        password:['',Validators.required]
      });
  
      this.userService.getUserById(+userId)
        .subscribe( data => {
          this.editForm.setValue(data);
        });
      }
      else
          this.router.navigate(['/login']);
    }
  
    editUser() {
      this.submitted = true;
      if(this.editForm.invalid){
        return;
      }
      this.userService.updateUser(this.editForm.value)
        // .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['list-user']);
          },
          error => {
            alert(error);
          });
  
  }

}
