import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAGGridComponent } from './dynamic-ag-grid.component';

describe('DynamicAGGridComponent', () => {
  let component: DynamicAGGridComponent;
  let fixture: ComponentFixture<DynamicAGGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicAGGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicAGGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
