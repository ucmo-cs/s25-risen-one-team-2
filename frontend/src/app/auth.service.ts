import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, throwError, of } from 'rxjs';
import { Router } from '@angular/router';

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