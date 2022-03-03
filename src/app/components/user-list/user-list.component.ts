import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import User from '../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  columns: any[] = [
    { header: 'Username', field: 'username' },
    { header: 'Name', field: 'name' },
    { header: 'Gender', field: 'gender' },
    { header: 'Email', field: 'email' },
    { header: 'Phone', field: 'phone' },
  ];

  data: User[] = [];

  currentPage: number = 1;

  actions = [
    {
      name: 'Edit',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>`,
    },
    {
      name: 'Delete',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>`,
    },
  ];

  constructor(private service: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(page = 1) {
    this.service.getUsers(page).subscribe((users) => (this.data = users));
  }

  onAction({ action, data }: { action: string; data: any }) {
    if (action === 'Edit') {
      this.router.navigate(['/user'], { state: { user: data } });
    }
    if (action === 'Delete') {
      const confirmed = confirm(
        `Are you sure you want to delete the user ${data.username}`
      );
      if (confirmed) {
        alert(`User ${data.username} has been deleted.`);
        this.loadUserData(this.currentPage);
      }
    }
  }

  pageChange(page: number) {
    this.currentPage = page;
    this.loadUserData(page);
  }

  addUser() {
    this.router.navigate(['/user']);
  }
}
