import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
//TO UNDERSTAND CALC SERVICE
// import { CalcService } from 'src/app/services/calc.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  rbtnSearch:string;
//injecting router,UsersService
//using Constructor Injection method
  constructor(private router:Router,private usersService:UsersService){}
    // private calcService:CalcService) { }
  //ONLY TO UNDERSTAND SIMPLE SERVICE
  // showAddition(){
  //   let res=this.calcService.addition(10,20);
  //   alert('Addition is '+res);
  // }
  //to hold list of users
  users:User[];
  searchBy: any;
  searchNumber: any;
  ngOnInit() {
    if(localStorage.email){
      this.usersService.getAllUsers().subscribe(data=>{
        //on success or on resolve
        this.users=data;
        console.log(this.users);
      },
      err=>{
        console.log(err.stack);
      })
    }else{
      this.router.navigate(['/login']);
    }
  }
  logOutUser(){
      // alert('Log Out');
      if(localStorage.email){
        localStorage.removeItem("email");
        this.router.navigate(['/login']);
      }
  }

  //deleteUser(user) functon
  deleteUser(user: User){
    let confirmyN = confirm('Do youwant to delete the selected user?');

    if(confirmyN){
      this.usersService.deleteUser(user.ID).subscribe(data=>{
        this.users=this.users.filter(u=> u!==user);
        console.log(this.users);
      });
      alert(user.FirstName+" record is deleted..!");
    }
  }

  editUser(user: User): void {
    //using local storage
    // localStorage.removeItem("editUserId");
    // localStorage.setItem("editUserId", user.ID.toString());
    // this.router.navigate(['edit-user']);

    //using route parameter
    this.router.navigate(['edit-user',user.ID]);
  };
  

}
