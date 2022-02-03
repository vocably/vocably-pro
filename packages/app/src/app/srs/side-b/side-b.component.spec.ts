import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBComponent } from './side-b.component';

describe('SideBComponent', () => {
  let component: SideBComponent;
  let fixture: ComponentFixture<SideBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideBComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
