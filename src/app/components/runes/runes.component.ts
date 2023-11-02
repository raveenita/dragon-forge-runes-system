import { SystemRuneService } from './../../services/system-rune.service';
import { Component, OnInit } from '@angular/core';
import { Rune } from '../../interfaces/rune.interface';

@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.scss']
})
export class RunesComponent implements OnInit {
  runes: Array<Rune> = [];

  constructor(readonly systemRune: SystemRuneService) { }

  ngOnInit(): void {
    this.runes = this.systemRune.getRunes();
  }
}

