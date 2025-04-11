import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';

interface previousRequest {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-profile',
  providers: [provideNativeDateAdapter()],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  username: string = 'test';  
  name: string = '';
  phone: string = '';
  email: string = '';
  birthday: string = '';
  city: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    const apiUrl = 'https://1i28tkz6af.execute-api.us-east-1.amazonaws.com/dev/login'; 
    this.http
      .get<any>(`${apiUrl}?username=${this.username}`)
      .subscribe((response) => {
        if (response && response.user) {
          this.name = response.user.name;
          this.phone = response.user.phone;
          this.email = response.user.email;
          this.birthday = response.user.birthday;
          this.city = response.user.city;
        } else {
          console.log('User not found');
        }
      });
  }

  updateUserData() {
    const apiUrl = 'https://1i28tkz6af.execute-api.us-east-1.amazonaws.com/dev/login'; 
    const userData = {
      username: this.username,
      name: this.name,
      phone: this.phone,
      email: this.email,
      birthday: this.birthday,
      city: this.city,
    };

    this.http.post<any>(apiUrl, userData).subscribe(
      (response) => {
        console.log('User updated successfully:', response);
        alert('Information saved successfully!');
      },
      (error) => {
        console.error('Error updating user data:', error);
        alert('Error saving information. Please try again.');
      }
    );
  }

  signIn() {
    this.router.navigate(['/login']);
  }
}
