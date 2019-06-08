import { NgModule } from '@angular/core';
import { CharacterComponent } from './character.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
    imports: [
        BrowserModule, 
        RouterModule, 
        NgxPaginationModule,
        NgxLoadingModule.forRoot({})
    ],
    declarations: [
        CharacterComponent
    ],
    exports: [
        CharacterComponent
    ]
})
export class CharacterModule { }