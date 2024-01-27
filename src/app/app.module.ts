import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DialogTodoComponent } from './components/dialog-todo/dialog-todo.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MainpageModule } from './components/mainpage/mainpage.module';
import { SharedModule } from './shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { environment } from 'src/environments/environment.prod';
import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    DialogTodoComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    MainpageComponent,
    PageNotFoundComponent,
    HomeComponent,
  
    
    
  ],
  imports: [
    MatSidenavModule,
    BrowserModule,
    MainpageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    AngularFireDatabaseModule,
    MatIconModule,
    MatSidenavModule,
    // MatCardModule, 
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
