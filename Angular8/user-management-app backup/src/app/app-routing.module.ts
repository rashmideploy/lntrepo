import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { EditUserComponent } from 'src/app/components/edit-user/edit-user.component';
import { ListUserComponent } from 'src/app/components/list-user/list-user.component';
import { AddUserComponent } from 'src/app/components/add-user/add-user.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'list-user',component:ListUserComponent},
  // {path:'edit-user/:id',component:EditUserComponent},
  {path:'edit-user',component:EditUserComponent},
  // {path:'',component:HomeComponent}
  // {path:'',redirectTo:'/home',pathMatch:'full'},
  {path: '**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
