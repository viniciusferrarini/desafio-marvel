import { NgModule } from '@angular/core';
import { CharacterComponent } from './character.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from '../app.component';

@NgModule({
    imports: [ BrowserModule, NgxPaginationModule ],
    declarations: [ CharacterComponent ],
    exports: [ CharacterComponent ],
    providers: [ AppComponent ]
})
export class CharacterModule { }