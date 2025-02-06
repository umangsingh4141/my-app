import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsService, UserResponse } from '../user-details/user-details.service';

@Component({
  selector: 'app-users-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-details.component.html',
  styleUrl: './users-details.component.scss'
})
export class UsersDetailsComponent implements OnInit {
  userId: string | null = null;
  userDetails: UserResponse | null = null;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserDetailsService
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.loadUserDetails(this.userId);
    }
  }

  private loadUserDetails(id: string) {
    this.userService.getUserById(id).subscribe({
      next: (response) => {
        this.userDetails = response;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load user details';
        this.loading = false;
      }
    });
  }
}
