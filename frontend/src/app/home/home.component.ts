import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  providers: [provideNativeDateAdapter()],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {}

@Component({
  selector: 'button-overview-example',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  standalone: true
})
export class ButtonOverviewExample {}

