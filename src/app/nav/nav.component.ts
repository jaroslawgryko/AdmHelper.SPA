import { Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Component, OnInit } from '@angular/core';

 @Component({
   selector: 'app-nav',
   templateUrl: './nav.component.html',
   styleUrls: ['./nav.component.css']
 })
 export class NavComponent implements OnInit {

   model: any = {};

   constructor(
      private authService: AuthService,
      private alertify: AlertifyService,
      private router: Router) { }

   ngOnInit() {
   }

   login() {
     // console.log(this.model);
     this.authService.login(this.model).subscribe(data => {
      this.alertify.success('Zalogowałeś się');
     }, error => {
      this.alertify.error('Błąd logowania');
     }, () => {
       this.router.navigate(['/members']);
     });
   }

   logout() {
     this.authService.userToken = null;
     localStorage.removeItem('token');
     this.alertify.message('Wylogowałeś się');
     this.router.navigate(['/home']);
   }

   loggedIn() {
    //  const token = localStorage.getItem('token');
    //  return !!token;
     return this.authService.loggedIn();
   }

 }
