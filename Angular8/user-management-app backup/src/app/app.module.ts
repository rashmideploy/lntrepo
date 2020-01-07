//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//reactive form
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//component
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
//pipes
import { SqrtPipe } from './pipes/sqrt.pipe';
//httpclient
import { HttpClientModule } from '@angular/common/http';
import { NamePipe } from './pipes/name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddUserComponent,
    ListUserComponent,
    EditUserComponent,
    SqrtPipe,
    NamePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
