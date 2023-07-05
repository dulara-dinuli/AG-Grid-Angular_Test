import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedCRAGGridComponent } from './customized-cr-ag-grid.component';

describe('CustomizedCRAGGridComponent', () => {
  let component: CustomizedCRAGGridComponent;
  let fixture: ComponentFixture<CustomizedCRAGGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizedCRAGGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizedCRAGGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
