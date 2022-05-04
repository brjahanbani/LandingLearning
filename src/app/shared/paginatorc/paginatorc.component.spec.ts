import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorcComponent } from './paginatorc.component';

describe('PaginatorcComponent', () => {
  let component: PaginatorcComponent;
  let fixture: ComponentFixture<PaginatorcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
