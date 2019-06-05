import { Component, OnInit } from '@angular/core';
import { Character } from '../model/character';
import { CharacterService } from '../service/character.service';
import { CharacterDataWrapper } from '../model/character.data.wrapper';

@Component({
  moduleId: module.id,
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.characterService.findAll()
      .subscribe((data: CharacterDataWrapper) => {
        this.characters = data.data.results;
      },
        () => {
          console.log("deu ruim");
        });
  }
}
