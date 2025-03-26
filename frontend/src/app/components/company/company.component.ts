import { Component } from '@angular/core';
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
  //Needs to be an array filled with information from DynamoDB
  //for testing purposes only
  items = [
    {
    title: 'Gary White',
    description: 'President', 
    image:'/assets/boyPic.jpg',
    info: 'More information to be displayed soon.'
    },
    {
    title: 'Sarah Johnson', 
    description: 'CEO', 
    image:'/assets/woman.jpg',
    info: 'More information to be displayed soon.'
    },
    {
    title: 'Bill Murray', 
    description: 'Vice President', 
    image:'/assets/boyPic.jpg',
    info: 'More information to be displayed soon.'
    },
    {
    title: 'Gregory Jensen', 
    description: 'HR Manager', 
    image:'/assets/boyPic.jpg',
    info: 'More information to be displayed soon.'
    },
    {
    title: 'Sheri Briggs', 
    description: 'Manager', 
    image:'/assets/woman.jpg',
    info: 'More information to be displayed soon.'
    },
    {
    title: 'Dana French', 
    description: 'Manager', 
    image:'/assets/woman.jpg',
    info: 'More information to be displayed soon.'
    }
  ];
}
