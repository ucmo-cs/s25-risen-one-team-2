import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private apiUrl = 'https://rhwqo88bqd.execute-api.us-east-1.amazonaws.com/dev';

    constructor(private http: HttpClient,private router: Router) { }
  
    login(username: string, password: string): Observable<boolean> {
      // Your login logic with Lambda function
      // Simulating success for demonstration purposes
      const loginPayload = {
        username: username,
        password: password
      };
      
      // Send the POST request to the API Gateway with the username and password
    return this.http.post<{ message: string }>(this.apiUrl + '/login', loginPayload)
    .pipe(
      map(response => {
        console.log("api response:", response);
        // Check if the response message indicates success
        if (response.message === 'Login successful') {
          alert("login success");
          // Optionally, store a token or session data if needed
          this.router.navigate(['/home']);
          return true;
        } else {
          return false;
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        return [false];  // Return false if the API call fails
      })
    );
  }
  
logout() {
  //Your logout logic (clear tokens, etc.)
  // Redirect to login page
 // this.router.navigate(['/login']);
}
  

}



/*
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

*/