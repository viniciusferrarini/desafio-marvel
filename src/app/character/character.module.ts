import { NgModule } from '@angular/core';
import { CharacterComponent } from './character.component';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    imports: [ BrowserModule, NgxPaginationModule ],
    declarations: [ CharacterComponent ],
    exports: [ CharacterComponent ],
    providers: [ ]
})
export class CharacterModule { }