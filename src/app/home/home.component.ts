import { HttpClient } from '@angular/common/http';
import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LocationStrategy } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  message = 'WELCOME!!! You are logged In....';

  constructor(
    public _authService: AuthService,
    private location: LocationStrategy
    ) { 
      history.pushState(null, '', window.location.href);  
      this.location.onPopState(() => {
      history.pushState(null, '', window.location.href);
});  
    }

  ngOnInit(): void {}

}
