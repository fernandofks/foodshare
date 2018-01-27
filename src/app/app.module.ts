import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CardComponent } from './card/card.component';
import {FormsModule} from "@angular/forms";
import { BarraComponent } from './barra/barra.component';
import { TComponent } from './t/t.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
 
    CardComponent,
 
    BarraComponent,
 
    TComponent,
 
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
