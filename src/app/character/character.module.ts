import { NgModule } from '@angular/core';
import { CharacterComponent } from './character.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ CharacterComponent ],
    exports: [ CharacterComponent ],
    providers: [ ]
})
export class CharacterModule { }