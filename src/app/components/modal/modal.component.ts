import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  hide: boolean = true;

  openModal() {
    this.hide = false;
  }

  closeModal() {
    this.hide = true;
  }
}
