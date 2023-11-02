import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunesComponent } from './runes.component';
import { RuneComponent } from '../rune/rune.component';
import { SystemRuneService } from 'src/app/services/system-rune.service';

describe('RunesComponent', () => {
  let component: RunesComponent;
  let fixture: ComponentFixture<RunesComponent>;
  let systemRuneService: SystemRuneService;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunesComponent, RuneComponent]
    });
    fixture = TestBed.createComponent(RunesComponent);
    component = fixture.componentInstance;
    systemRuneService = TestBed.inject(SystemRuneService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the runes', () => {
    spyOn(systemRuneService, 'getRunes');
    component.ngOnInit();
    expect(systemRuneService.getRunes).toHaveBeenCalled();
  });
});
