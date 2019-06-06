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
  page: number = 1; //Página selecionada atualmente
  totalItems: number = 0; //O número total de registros disponíveis considerando o conjunto de filtros atual
  limit: number = 9; //Define o número de registros por página
  offset: number = 0; //Número de registros ignorados 


  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.findCharacters();
  }

  /**
   * Busca os characters com base no offset da paginação
  */
  findCharacters() {
    this.characterService.findByPage(this.offset)
      .subscribe((data: CharacterDataWrapper) => {
        this.characters = data.data.results;
        this.totalItems = data.data.total;
      },
      () => {
        console.log("deu ruim");
      });
  }

  /**
   * Concatena a url da imagem com a extensão
   * @param character  
  */
  getImageUrl(character: Character) {
    return character.thumbnail.path + "." + character.thumbnail.extension;
  }

  /**
   * Função chamada no momento em que é alterada a pagination
   * @param event  
  */
  pageChange(event: any){
    this.offset = (9 * event) - 9;
    this.page = event;
    this.findCharacters();
  }

}
