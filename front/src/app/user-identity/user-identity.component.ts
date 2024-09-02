// src/app/components/user-identity/user-identity.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-user-identity',
  templateUrl: './user-identity.component.html',
  styleUrls: ['./user-identity.component.scss'],
})
export class UserIdentityComponent implements OnInit {
  users: User[] = [];
  selectedUserId?: number;
  selectedUserType?: string; // 'EMP' ou 'CLI'

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        console.log(data);
        this.users = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    );
  }

  onUserSelect(userId: number, userType: string): void {
    this.selectedUserId = userId;
    this.selectedUserType = userType;
  }

  startChat(): void {
    if (this.selectedUserId && this.selectedUserType) {
      sessionStorage.setItem('userId', this.selectedUserId.toString());
      sessionStorage.setItem('userType', this.selectedUserType);
      this.router.navigate(['/chat']);
    }
  }
}
