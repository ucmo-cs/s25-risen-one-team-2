import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //API URL for the Lambda function
  private apiUrl = 'https://y9zr6k5yol.execute-api.us-east-1.amazonaws.com/dev';

  constructor(private http: HttpClient,private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    console.log('Making request to:', `${this.apiUrl}/login`);

    return this.http.post<{message: string}>(`${this.apiUrl}/login`,{username,password},
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .pipe(
      map(response => {
        console.log('Response:', response);
        if(response.message === 'Login successful'){
          localStorage.setItem('username', username);
          return true;
        }
        return false;
      }),
      catchError(error => {
        if(error.status === 401){
          return throwError(() => 'Invalid username or password');
        }
        return throwError(() => 'An error occurred during login');
      })
    
    )
  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('username');
  }
}