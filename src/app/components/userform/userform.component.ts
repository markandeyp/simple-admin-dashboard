import {
  Component,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import User from 'src/app/models/User';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss'],
})
export class UserformComponent {
  @Input()
  user!: User;

  @Output()
  onSave = new EventEmitter<User>();

  @Output()
  onCancel = new EventEmitter<void>();

  @ViewChild('name')
  nameEl!: ElementRef;

  @ViewChild('email')
  emailEl!: ElementRef;

  @ViewChild('role')
  roleEl!: ElementRef;

  constructor() {}

  save() {
    this.user = {
      id: this.user.id,
      name: this.nameEl.nativeElement.value,
      email: this.emailEl.nativeElement.value,
      role: this.roleEl.nativeElement.value,
    };
    this.onSave.emit(this.user);
  }

  cancel() {
    this.onCancel.emit();
  }
}
