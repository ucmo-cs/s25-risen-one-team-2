import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, throwError, of } from 'rxjs';
import { Router } from '@angular/router';

/*
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //API URL for the Lambda function
  private apiUrl = '';

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    console.log('Making request to:', `${this.apiUrl}/login`, {username: username, password: password});
    
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    };
  
    return this.http.post<any>(
      `${this.apiUrl}/login`, 
      { username: username, password: password },
      {
        headers: headers
      }
    )
    .pipe(
      map(response => {
        console.log('Response:', response);
        localStorage.setItem('username', username);
        return true;
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(() => 'An error occurred during login');
      })
    ); 
 }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('username');
  }
}

*/

 //https://rhwqo88bqd.execute-api.us-east-1.amazonaws.com/dev

  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    constructor(private http: HttpClient,private router: Router) { }
  
    login(username: string, password: string): Observable<boolean> {
      // Your login logic with Lambda function
      // Simulating success for demonstration purposes
      const loginSuccess = true;
      
      return new Observable<boolean>((observer) => {
        if (loginSuccess) {
          observer.next(true); // Notify subscribers that login was successful
          observer.complete(); // Complete the observable
        } else {
          observer.error('Login failed'); // Notify subscribers that login failed
        }
      });
    }
  
    logout() {
      // Your logout logic with Lambda function
      // Simulating success for demonstration purposes
      const logoutSuccess = true;
  
      if (logoutSuccess) {
        // Redirect to login page or any other desired page
        this.router.navigate(['/login']);
      } else {
        // Handle logout failure
        console.error('Logout failed');
      }
    }
  }
  