import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RuneComponent } from './components/rune/rune.component';
import { RunesComponent } from './components/runes/runes.component';

@NgModule({
  declarations: [
    AppComponent,
    RuneComponent,
    RunesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
