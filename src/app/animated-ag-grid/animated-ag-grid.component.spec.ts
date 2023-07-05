import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedAGGridComponent } from './animated-ag-grid.component';

describe('AnimatedAGGridComponent', () => {
  let component: AnimatedAGGridComponent;
  let fixture: ComponentFixture<AnimatedAGGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedAGGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedAGGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
