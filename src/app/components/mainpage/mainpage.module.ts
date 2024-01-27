import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    TodoListPageComponent,
    ProfilePageComponent,
   
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainpageRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MainpageModule { }
