import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { ViewstudentsComponent } from './viewstudents/viewstudents.component';
import { ViewfacultyComponent } from './viewfaculty/viewfaculty.component';
const appRoutes:Routes=[
  {
    path:"",component:AdminloginComponent
  },
  {
    path:"done",component:NavbarComponent
  },
  {
    path:"ok",component:AddstudentComponent
  },
  {
    path:"on",component:AddfacultyComponent
  },
  {
    path:"ook",component:ViewstudentsComponent
  },
  {
    path:"oon",component:ViewfacultyComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    NavbarComponent,
    AddstudentComponent,
    AddfacultyComponent,
    ViewstudentsComponent,
    ViewfacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),  
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
