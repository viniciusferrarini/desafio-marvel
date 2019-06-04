import { Component } from '@angular/core';
import { DataController } from '../service/data.controller';
import { Character } from './character';
import { CharacterService } from './character.service';

@Component({
  moduleId: module.id,
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent extends DataController<Character, number> {

  constructor(characterService: CharacterService) {
    super(characterService, Character);
  }

}
