import { Component, Input, OnInit } from '@angular/core';
import { Rune } from 'src/app/interfaces/rune.interface';

@Component({
  selector: 'app-rune',
  templateUrl: './rune.component.html',
  styleUrls: ['./rune.component.scss']
})
export class RuneComponent implements OnInit  {
  @Input() rune: Rune | undefined;

  ngOnInit(): void {
    console.log(this.rune);
  }


  composeRuneClassName() {
    return `rune__symbol rune__symbol--${this.rune?.name.toLocaleLowerCase().replace("'", "")}`;
  }
}
