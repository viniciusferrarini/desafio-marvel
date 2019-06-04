import { NgModule } from '@angular/core';
import { CharacterComponent } from './character.component';
import { CharacterService } from './character.service';

@NgModule({
    imports: [],
    declarations: [ CharacterComponent ],
    exports: [ CharacterComponent ],
    providers: [ CharacterService ]
})
export class CharacterModule { }