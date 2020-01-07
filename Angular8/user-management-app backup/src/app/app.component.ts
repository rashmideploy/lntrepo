import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AtoZ Solutions - user management app..!';

  todaysDate=new Date();

  /**
   *
   */
  constructor() {
    //setInterval(), it is asynchronous function
    //Here, it is taking two parameters
    //1st parameter is anonymous callbackfunc, and 
    //2nd param is time in millisecs
    //Below func, calls anonymous call back func after each sec
    
    setInterval(()=>{
      this.todaysDate=new Date();
    },1000)
    //called only once
    //setTimeout(callbackfunc,timeinmillsec);
  }
}
