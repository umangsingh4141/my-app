import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private users: any[] = [];

  constructor(private router: Router) {
    // Check localStorage for existing users and auth state
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
    
    // Check if user was previously logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.isAuthenticated.next(isLoggedIn);
  }

  signup(user: {name: string, password: string}) {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
    return true;
  }

  login(name: string, password: string): boolean {
    const user = this.users.find(u => u.name === name && u.password === password);
    if (user) {
      this.isAuthenticated.next(true);
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated.next(false);
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  // Helper method to check current auth state
  getAuthStatus(): boolean {
    return this.isAuthenticated.value;
  }
}
