import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CardComponent } from './card/card.component';
import {FormsModule} from "@angular/forms";
import { BarraComponent } from './barra/barra.component';



@NgModule({
  declarations: [
    AppComponent,
 
    CardComponent,
 
    BarraComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
