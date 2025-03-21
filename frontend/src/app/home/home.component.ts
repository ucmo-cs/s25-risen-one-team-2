import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


interface previousRequest {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form',
  providers: [provideNativeDateAdapter()],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  constructor (private router: Router ) {}
  /* Sign In navigation Function */
  ngOnInit(){}
  signIn() {
    this.router.navigate(['/login']);
  }
}

@Component({
  selector: 'button-overview-example',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  standalone: true
})
export class ButtonOverviewExample {}

