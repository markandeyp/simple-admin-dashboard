import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import User from './models/User';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'admin-dashboard';

  @ViewChild(ModalComponent)
  modal!: ModalComponent;

  columns: any[] = [
    { header: 'ID', field: 'id' },
    { header: 'Name', field: 'name' },
    { header: 'Email', field: 'email' },
    { header: 'Role', field: 'role' },
  ];

  data: User[] = [];

  edit: boolean = false;

  user: User = {};

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  openUserModal(user: User | null) {
    if (user) {
      this.edit = true;
      this.user = user;
    } else {
      this.user = {};
      this.edit = false;
    }
    this.modal.openModal();
  }

  save(user: User) {
    if (this.edit) {
      this.service.updateUser(user).subscribe((result) => {
        this.modal.closeModal();
        this.loadUserData();
      });
    } else {
      this.service.addUser(user).subscribe((result) => {
        this.modal.closeModal();
        this.loadUserData();
      });
    }
  }

  cancel() {
    this.user = {};
    this.modal.closeModal();
  }

  loadUserData() {
    this.user = {};
    this.service.getUsers().subscribe((users) => (this.data = users));
  }
}
