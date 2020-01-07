import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  emps: any;

  weatherData ;
  searchCity: any;
//  form1: FormGroup;
//   submitted: boolean = false;
  constructor(private formBuilder: FormBuilder,private apiService: ApiService) { }

  ngOnInit() {
   
  }

  searchByCity(){
    this.apiService.searchByCity(this.searchCity).subscribe((data) => {
      console.log(data);
          
      this.weatherData = data;
      
      
    })

  }

  getEmps(){
    this.apiService.getAllEMployees().subscribe(data=>{
      this.emps=data;
      console.log(this.emps);
    },err=>{
      console.log(err.stack);
    })
    
  }

}
