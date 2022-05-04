import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginatorc',
  templateUrl: './paginatorc.component.html',
  styleUrls: ['./paginatorc.component.css'],
})
export class PaginatorcComponent implements OnInit {
  numberOfPages: number = 5;
  currentPage: number = 1;
  PageOptions!: number[];

  constructor() {
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

  ngOnInit(): void {}
}
