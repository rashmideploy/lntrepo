import { Component, OnInit, OnChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  title:string="Welcome to angular 8";

  //months array
  // months=["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

  constructor() { }

  ngOnInit() {
  }

}
