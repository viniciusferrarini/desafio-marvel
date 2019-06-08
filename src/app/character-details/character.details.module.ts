import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character.details.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    NgbModule,
    NgxLoadingModule.forRoot({})
  ],
  bootstrap: [],
  exports: [
    CharacterDetailsComponent
  ]
})
export class CharacterDetailsModule { }
