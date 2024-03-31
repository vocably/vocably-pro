import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageComponent } from './second-page.component';

describe('SecondPageComponent', () => {
  let component: SecondPageComponent;
  let fixture: ComponentFixture<SecondPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
