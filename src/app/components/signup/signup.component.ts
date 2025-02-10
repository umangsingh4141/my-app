import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  user = {
    name: '',
    password: '',
    confirmPassword: '',
    role: 'user' as 'admin' | 'user' | 'guest'
  };
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignup() {
    if (this.user.password !== this.user.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      return;
    }
    
    const newUser: User = {
      name: this.user.name,
      password: this.user.password,
      role: this.user.role
    };
    
    if (this.authService.signup(newUser)) {
      this.router.navigate(['/login']);
    }
  }
}
