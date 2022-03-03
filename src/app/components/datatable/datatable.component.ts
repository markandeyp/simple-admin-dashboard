import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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

  @Input()
  actions: { name: string; icon: string }[] = [];

  @Input()
  pagination: boolean = false;

  @Input()
  pageCount: number = 1;

  @Output()
  onAction = new EventEmitter<{ action: string; data: any }>();

  @Output()
  onPageChange = new EventEmitter<number>();

  currentPage = 1;

  constructor(private sanitizer: DomSanitizer) {}

  handleAction(action: string, data: any) {
    this.onAction.emit({ action, data });
  }

  sanitizeIcon(icon: string) {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  handlePageChange(page: number) {
    this.currentPage = page;
    this.onPageChange.emit(page);
  }

  range(upper: number) {
    return new Array(upper).fill(0).map((v, i) => i + 1);
  }
}
