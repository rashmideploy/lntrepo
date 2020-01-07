import { Injectable } from '@angular/core';
//for HttpClient
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // private baseURL: string ="/assets/data/ltidb.json";
  //private baseURL: string = "http://localhost:3000/users";
  // private baseURL: string = "http://localhost:50521/api/Users";
  private baseURL: string = "http://localhost:50521/api/Persons";
  //Injecting HttpClient Service using Constructor Injection Method
  //Constructor Injection
  //Add immediately Http Client Module inside @NgModule decorator under imports section otherwise it will throw static inetion excepton

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<User[]>(this.baseURL);

  }

  //getUserById(id:number)
  getUserById(id: number) {
    // return this.http.get<<User>(this.baseURL+"/"+id);
    return this.http.get<User>(`${this.baseURL}/${id}`);
  }

  //addUser 
  addUser(user: User) {
    //first paaram is url,second is request body
    return this.http.post(this.baseURL, user);
  }

  //update
  updateUser(user: User) {
    // return this.http.put(this.baseURL+"/"+user.id,user);

    return this.http.put(`${this.baseURL}/${user.ID}`,user);
  }

  //delete user by id
  deleteUser(id: number) {
    return this.http.delete(this.baseURL + "/" + id);
  }

  getUserByEmail(email:string){
    return this.http.get<User[]>(this.baseURL+"/search/"+email);
  }


}
