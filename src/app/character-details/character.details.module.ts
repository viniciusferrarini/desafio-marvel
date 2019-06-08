import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character.details.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    NgbModule
  ],
  bootstrap: [],
  exports: [
    CharacterDetailsComponent
  ]
})
export class CharacterDetailsModule { }
