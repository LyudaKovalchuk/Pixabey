import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpService } from './services/http/http.service';
import { FavoriteService } from './services/favorite/favorite.service';

import { AppComponent } from './components/app/app.component';
import { ItemContainerComponent } from './components/item-container/item-container.component';
import { ModalComponent } from './components/modal/modal.component';
import { HeaderComponent } from './components/header/header.component';

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
