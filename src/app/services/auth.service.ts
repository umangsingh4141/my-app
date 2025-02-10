import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface User {
  name: string;
  password: string;
  role: 'admin' | 'user' | 'guest';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject<User | null>(null);
  private users: User[] = [];

  constructor(private router: Router) {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
    
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUser.next(JSON.parse(savedUser));
      this.isAuthenticated.next(true);
    }
  }

  signup(user: User): boolean {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
    return true;
  }

  login(name: string, password: string): boolean {
    const user = this.users.find(u => u.name === name && u.password === password);
    if (user) {
      this.currentUser.next(user);
      this.isAuthenticated.next(true);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated.next(false);
    this.currentUser.next(null);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUser.asObservable();
  }

  getUserRole(): string | null {
    return this.currentUser.value?.role || null;
  }

  isLoggedIn(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  getAuthStatus(): boolean {
    return this.isAuthenticated.value;
  }
}
