import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpService } from 'app/services/http.service'

import { AppComponent } from './app.component';
import { ItemContainerComponent } from './item-container/item-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
