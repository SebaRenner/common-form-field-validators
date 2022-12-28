import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibValidatorsComponent } from './lib-validators.component';

describe('LibValidatorsComponent', () => {
  let component: LibValidatorsComponent;
  let fixture: ComponentFixture<LibValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibValidatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
