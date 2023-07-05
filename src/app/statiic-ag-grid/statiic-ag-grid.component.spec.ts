import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatiicAGGridComponent } from './statiic-ag-grid.component';

describe('StatiicAGGridComponent', () => {
  let component: StatiicAGGridComponent;
  let fixture: ComponentFixture<StatiicAGGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatiicAGGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatiicAGGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
