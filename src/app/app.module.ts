import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RwaComponent } from './rwa/rwa.component';
import { MemberListComponent } from './member-list/member-list.component';
import { CsvComponent } from './csv/csv.component';
import { StrukturaComponent } from './struktura/struktura.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    RwaComponent,
    MemberListComponent,
    CsvComponent,
    StrukturaComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
