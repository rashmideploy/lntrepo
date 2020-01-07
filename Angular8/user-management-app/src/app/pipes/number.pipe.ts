import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(usersList: any,searchNumber:any): any {
    let searchedList: any;
    if(searchNumber){
      searchedList=usersList.filter(user=>
      user.MobileNumber.startsWith(searchNumber))
    }
    else
     searchedList=usersList;
    return searchedList;
  }

}
