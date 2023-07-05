import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesAGGridComponent } from './features-ag-grid.component';

describe('FeaturesAGGridComponent', () => {
  let component: FeaturesAGGridComponent;
  let fixture: ComponentFixture<FeaturesAGGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesAGGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesAGGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
