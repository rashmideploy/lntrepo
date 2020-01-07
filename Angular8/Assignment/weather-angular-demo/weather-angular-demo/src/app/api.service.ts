import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Service class to call api
  API_KEY = '8fe3f4565860952da11e31db6d4aa8a4';
  //City=""
  constructor(private httpClient: HttpClient) { }
   searchByCity(searchCity){
     console.log(searchCity)
    
    return this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&apiKey=${this.API_KEY}`);

  }

  getAllEMployees(){
    return this.httpClient.get("http://dummy.restapiexample.com/api/v1/employees");
  }
}

