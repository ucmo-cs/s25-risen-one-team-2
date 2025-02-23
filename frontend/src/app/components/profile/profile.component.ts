import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';

interface previousRequest {
    value: string;
    viewValue: string;
  }

@Component({
    selector: 'app-profile',
    providers: [provideNativeDateAdapter()],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css'
  })


export class ProfileComponent {
  constructor (private router: Router ) {}
  /* Sign In navigation Function */
  ngOnInit(){}
  signIn() {
    this.router.navigate(['/login']);
  }
}
