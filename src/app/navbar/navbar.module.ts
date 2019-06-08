import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [ 
    NavbarComponent
  ],
  imports: [ 
    BrowserModule, 
    RouterModule 
  ],
  exports: [ 
    NavbarComponent 
  ]
})
export class NavbarModule { }
