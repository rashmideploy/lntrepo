import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-mail',
  templateUrl: './search-mail.component.html',
  styleUrls: ['./search-mail.component.css']
})
export class SearchMailComponent implements OnInit {
 

  constructor(private router:Router,
  private usersService:UsersService) { }
  searchEmail:any;
  users:User[];
  ngOnInit() {

    
  }
  getUserByEmail(){
    this.usersService.getUserByEmail(this.searchEmail).subscribe(data=>{
      this.users=data;
      console.log(this.users)
    });
  }

}
