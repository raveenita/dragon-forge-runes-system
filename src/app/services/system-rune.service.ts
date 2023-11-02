import { Injectable } from '@angular/core';
import { Rune } from '../interfaces/rune.interface';
import { runes } from '../__mocks__/runes';

@Injectable({
  providedIn: 'root'
})
export class SystemRuneService {

  public runes: Array<Rune> = runes;

  constructor() { }

   /**
   * @description Will retrieve the runes
   */
  public getRunes(): Array<Rune> {
    return this.shuffle();
  }

  /**
   * @description Will retrieve the runes
   */
  public getRune(): Rune {
    return {} as Rune;
  }

  /**
   * @description This method will shuffle the runes based on the current date.
   * @requires Date: The current date to shuffle the runes.
   */
  public shuffle(date: Date = new Date()): Array<Rune> {
    console.log(date.getMilliseconds() / 1000);
    return this.runes.sort(() => Math.random() - date.getMilliseconds() / 1000);
  }
}
