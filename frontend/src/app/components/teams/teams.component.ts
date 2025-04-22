import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';
import { CommonModule } from '@angular/common';


interface previousRequest {
    value: string;
    viewValue: string;
  }

@Component({
  standalone: true,
    selector: 'app-teams',
    providers: [provideNativeDateAdapter()],
    imports: [CommonModule],
    templateUrl: './teams.component.html',
    styleUrl: './teams.component.css'
  })


export class TeamsComponent {
 
  teams = [
    {
      name: 'Development',
      description: 'Responsible for software development and coding best practices.',
      employees: [
        { name: 'John Doe' },
        { name: 'Jane Smith' },
        { name: 'Robert Brown' },
        { name: 'Emily White' },
        { name: 'David Green' }
      ]
    },
    {
      name: 'Marketing',
      description: 'Handles all marketing and advertising strategies.',
      employees: [
        { name: 'Sarah Miller' },
        { name: 'Tom Harris' },
        { name: 'Olivia Clark' },
        { name: 'Daniel Wilson' },
        { name: 'Sophia Martinez' }
      ]
    },
    {
      name: 'HR',
      description: 'Manages employee relations, recruitment, and benefits.',
      employees: [
        { name: 'Henry Adams' },
        { name: 'Laura Scott' },
        { name: 'Ryan Baker' },
        { name: 'Anna Lewis' },
        { name: 'Kevin Hall' }
      ]
    },
    {
      name: 'Finance',
      description: 'Handles budgeting, financial planning, and company expenses.',
      employees: [
        { name: 'Natalie Carter' },
        { name: 'Ethan Parker' },
        { name: 'Madison Rodriguez' },
        { name: 'Brandon King' },
        { name: 'Isabella Allen' }
      ]
    },
    {
      name: 'Support',
      description: 'Provides customer service and technical support.',
      employees: [
        { name: 'Sophia Foster' },
        { name: 'Liam Torres' },
        { name: 'Chloe Jenkins' },
        { name: 'Nathan Perez' },
        { name: 'Ava Simmons' }
      ]
    },
    {
      name: 'Research',
      leader: 'Benjamin Turner',
      description: 'Conducts industry research and product innovations.',
      employees: [
        { name: 'Megan Collins' },
        { name: 'Samuel Reed' },
        { name: 'Victoria Cook' },
        { name: 'Zachary Stewart' },
        { name: 'Ella Gray' }
      ]
    }
  ];

  selectedTeam: any = null;

  toggleDetails(team: any) {
    this.selectedTeam = this.selectedTeam === team ? null : team;
  }
}