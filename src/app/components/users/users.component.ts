import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { UsersService, User } from './users.service';

// interface WeekDay {
//   dayNumber: number;
//   dayName: string;
// }

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  loading = true;
  error: string | null = null;
  
  weekDays = [
    { dayNumber: 1, dayName: 'Monday' },
    { dayNumber: 2, dayName: 'Tuesday' },
    { dayNumber: 3, dayName: 'Wednesday' },
    { dayNumber: 4, dayName: 'Thursday' },
    { dayNumber: 5, dayName: 'Friday' },
    { dayNumber: 6, dayName: 'Saturday' }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.usersService.getUsers().subscribe({
      next: (response) => {
        this.users = response.data;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load users';
        this.loading = false;
      }
    });
  }

  showDetails(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
