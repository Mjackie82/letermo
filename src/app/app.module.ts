import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { RowBoxComponent } from './components/row-box/row-box.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    RowBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
