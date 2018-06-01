import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { TorsoComponent } from './torso/torso.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    TorsoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
