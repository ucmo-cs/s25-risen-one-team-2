import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';

interface previousRequest {
    value: string;
    viewValue: string;
  }

@Component({
    selector: 'app-teams',
    providers: [provideNativeDateAdapter()],
    templateUrl: './teams.component.html',
    styleUrl: './teams.component.css'
  })


export class TeamsComponent {
  constructor (private router: Router ) {}
  /* Sign In navigation Function */
  ngOnInit(){}
  signIn() {
    this.router.navigate(['/login']);
  }
}
