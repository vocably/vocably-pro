import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionComponent } from './definition.component';

describe('DefinitionComponent', () => {
  let component: DefinitionComponent;
  let fixture: ComponentFixture<DefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefinitionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
