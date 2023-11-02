import { TestBed } from '@angular/core/testing';

import { SystemRuneService } from './system-rune.service';

describe('SystemRuneService', () => {
  const EXPECTED_NUMBER_OF_RUNES = 27;
  let service: SystemRuneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemRuneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have 27 items in the list', () => {
    const sumOfRunes = service.getRunes();

    expect(sumOfRunes.length).toBe(EXPECTED_NUMBER_OF_RUNES);
  });

  it('should suffle the list of runes to randomize the order items', () => {
    // I have to create a new array in order to compare the lists,
    // otherwise it will always be true because it is the same reference
    const originalRunes = [...service.getRunes()];
    const suffledRunes = service.shuffle();

    expect(originalRunes).not.toEqual(suffledRunes);
  });
});
