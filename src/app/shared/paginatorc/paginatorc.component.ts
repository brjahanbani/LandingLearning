import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-paginatorc',
  templateUrl: './paginatorc.component.html',
  styleUrls: ['./paginatorc.component.css'],
})
export class PaginatorcComponent {
  @Input() numberOfPages: number = 5;
  @Input() currentPage: number = 1;
  @Output() onPageChange = new EventEmitter<number>();

  PageOptions!: number[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.PageOptions = [
      this.currentPage - 2,
      this.currentPage - 1,
      this.currentPage,
      this.currentPage + 1,
      this.currentPage + 2,
    ].filter(
      (pageNumber) => pageNumber >= 1 && pageNumber <= this.numberOfPages
    );
  }

  onChangePage(page: number) {
    this.currentPage = page;
    this.onPageChange.emit(page);
  }
}
