import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuneComponent } from './rune.component';

describe('RuneComponent', () => {
  let component: RuneComponent;
  let fixture: ComponentFixture<RuneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuneComponent]
    });
    fixture = TestBed.createComponent(RuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
