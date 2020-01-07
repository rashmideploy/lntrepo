import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  userId:number;
 
  

  constructor(private formBuilder: FormBuilder,private router: Router, 
    private userService: UsersService,
    private route:ActivatedRoute){
      //from route parameter
        this.route.params.subscribe(params=>{
          this.userId=params['id']
          console.log(params['id'])
        })

 }

  ngOnInit() {
    if(localStorage.getItem("email")!=null){
      //from local storage
      // let userId = localStorage.getItem("editUserId");

      //from route parameter

      if(!this.userId) {
        alert("Invalid action.")
        this.router.navigate(['list-user']);
        return;
      }
      this.editForm = this.formBuilder.group({
        ID: [],
        FirstName:[{value:'',disabled:true},[Validators.required,Validators.pattern("[A-Z][a-z]{3,25}")]],
        LastName:[{value:'',disabled:true}, Validators.required],
        Age:['',[Validators.required, Validators.min(20),Validators.max(30)]],
        MobileNumber:['',[Validators.required, Validators.pattern('[6-9][0-9]{9}')]],
        Email:['',[Validators.required, Validators.email]],
        Password:['',Validators.required]
      });
  
      this.userService.getUserById(+this.userId)
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
      this.userService.updateUser(this.editForm.getRawValue())
        // .pipe(first())
        .subscribe(
          data => {
            alert(`${this.editForm.controls.FirstName.value} record is updated`);
            this.router.navigate(['list-user']);
          },
          error => {
            alert(error);
          });
  
  }

}
