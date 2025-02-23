import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';

interface previousRequest {
    value: string;
    viewValue: string;
  }

@Component({
    selector: 'app-company',
    providers: [provideNativeDateAdapter()],
    templateUrl: './company.component.html',
    styleUrl: './company.component.css'
  })


export class CompanyComponent {
  constructor (private router: Router ) {}
  /* Sign In navigation Function */
  ngOnInit(){}
  signIn() {
    this.router.navigate(['/login']);
  }
}
