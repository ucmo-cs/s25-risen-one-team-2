import { Component } from "@angular/core";
import {provideNativeDateAdapter} from '@angular/material/core';
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: "app-employee",
  imports: [CommonModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})      

export class EmployeeComponent {
  title = "employees";
}
