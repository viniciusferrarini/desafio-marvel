import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CharacterModule } from './character/character.module';
import { NavbarModule } from './navbar/navbar.module';

import { AppComponent } from './app.component';
import { CharacterDetailsModule } from './character-details/character.details.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FavoritesModule } from './favorites/favorites.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CharacterModule,
    CharacterDetailsModule,
    NavbarModule,
    AngularFontAwesomeModule,
    FavoritesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }