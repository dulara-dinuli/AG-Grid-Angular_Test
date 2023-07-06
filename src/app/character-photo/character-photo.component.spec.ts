import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPhotoComponent } from './character-photo.component';

describe('CharacterPhotoComponent', () => {
  let component: CharacterPhotoComponent;
  let fixture: ComponentFixture<CharacterPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
