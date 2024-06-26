import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ItemComponent } from './app.items';
import { GalleryComponent } from './app.gallery';
import { NavComponent } from './app.nav';

@NgModule({
  declarations: [
    ItemComponent,
    GalleryComponent,
    NavComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ItemComponent, GalleryComponent, NavComponent]
})
export class AppModule { }
