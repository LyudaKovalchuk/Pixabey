import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpService } from 'app/services/http.service';
import { FavoriteService } from 'app/services/favorite.service';

import { AppComponent } from './app.component';
import { ItemContainerComponent } from './item-container/item-container.component';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemContainerComponent,
    ModalComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [HttpService, FavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
