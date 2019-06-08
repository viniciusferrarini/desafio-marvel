import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    FavoritesComponent
  ]
})
export class FavoritesModule { }
