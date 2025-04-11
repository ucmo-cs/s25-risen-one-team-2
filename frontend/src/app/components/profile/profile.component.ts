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
  location: string = '';
  loading: boolean = true;

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
          this.location = response.user.location;
        } else {
          console.log('User not found');
        }
        this.loading = false;//might be able to take this out
      },
      (error) => {
        console.error('Error fetching data:', error); //show errors in console log
        this.loading = false; // loading set to false if not working
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
      location: this.location,
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
