import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent {
  @Input()
  columns: any[] = [];

  @Input()
  data: any[] = [];

  @Output()
  onRowClick = new EventEmitter<any>();

  rowClick(row: any) {
    this.onRowClick.emit(row);
  }
}
