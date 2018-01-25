import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BComponent } from './b/b.component';
import { VendaFormsComponent } from './venda-forms/venda-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    BComponent,
    VendaFormsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
