import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(usersList: any,searchText:any): any {
    let searchedList: any;
    if(searchText){
      searchedList=usersList.filter(user=>
      user.firstName.toLowerCase().startsWith(searchText.toLowerCase()))
    }
    else
     searchedList=usersList;
    return searchedList;
  }

}
