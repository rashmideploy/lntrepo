import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }
  //Simple Addition
  addition(fn:number,sn:number):number{
    let res:number=fn+sn;
    return res;
  }
}
