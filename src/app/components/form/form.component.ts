import { Component } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/models/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  user?: User;

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['user']) {
      this.user = state['user'];
    }
  }

  save() {
    alert('User has been added');
    this.router.navigate(['']);
  }

  cancel() {
    this.router.navigate(['']);
  }
}
