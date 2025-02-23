import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';
import { EmployeeComponent } from '../employee/employee.component';
import { CommonModule } from '@angular/common';

interface previousRequest {
    value: string;
    viewValue: string;
  }

@Component({
    standalone: true,
    selector: 'app-company',
    imports: [EmployeeComponent, CommonModule],
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
