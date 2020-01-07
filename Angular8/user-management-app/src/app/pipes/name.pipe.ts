import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  //Search by only first name
  // transform(usersList: any,searchText:any): any {
  //   let searchedList: any;
  //   if(searchText){
  //     searchedList=usersList.filter(user=>
  //     user.FirstName.toLowerCase().startsWith(searchText.toLowerCase()))
  //   }
  //   else
  //    searchedList=usersList;
  //   return searchedList;
  // }


  //Search by first name and last name
  transform(usersList: any,searchText:any): any {
    let searchedList: any;
    console.log(searchText[0] + " "+searchText[1])
    if(searchText[0]!=null && searchText[1]=="FirstName"){
      searchedList=usersList.filter(user=>
      user.FirstName.toLowerCase().startsWith(searchText[0].toLowerCase()))
    }
    else if(searchText[0]!=null && searchText[1]=="LastName"){
      searchedList=usersList.filter(user=>
      user.LastName.toLowerCase().startsWith(searchText[0].toLowerCase()))
    }
    else
     searchedList=usersList;
    return searchedList;
  }

}
