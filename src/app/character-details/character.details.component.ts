import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../service/character.service';
import { CharacterDataWrapper } from '../model/character.data.wrapper';
import { Character } from '../model/character';
import { Thumbnail } from '../model/thumbnail';
import { Comic } from '../model/comic';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-character.details',
  templateUrl: './character.details.component.html',
  styleUrls: ['./character.details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  id: string = "";
  character: Character = new Character;
  comics: Comic[] = [];
  events: Event[] = [];
  modalTitle: string = "";
  modalName: string = "";
  modalThumbnail: string = "";
  modalDescription: string = "";

  constructor(
    private route: ActivatedRoute, 
    private characterService: CharacterService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.findCharacter();
      this.findCharacterComics();
      this.findCharacterEvents();
    });
  }

  /**
   * Busca os detalhes do character pelo seu id  
  */
  findCharacter() {
    this.characterService.findById(this.id)
      .subscribe((data: CharacterDataWrapper) => {
        this.character = data.data.results[0];
      },
      () => {
        console.log("deu ruim");
      });
  }

  /**
   * Busca os comics do character pelo seu id  
  */
  findCharacterComics() {
    this.characterService.findComicsByCharacterId(this.id)
      .subscribe((data: CharacterDataWrapper) => {
        this.comics = data.data.results;
      },
      () => {
        console.log("deu ruim");
      });
  }

  /**
   * Busca os events do character pelo seu id  
  */
 findCharacterEvents() {
  this.characterService.findEventsByCharacterId(this.id)
    .subscribe((data: CharacterDataWrapper) => {
      this.events = data.data.results;
    },
    () => {
      console.log("deu ruim");
    });
}

  /**
   * Concatena a url da imagem com a extensão
   * @param thumbnail  
  */
  getImageUrl(thumbnail: Thumbnail) {
    if(thumbnail) {
      return thumbnail.path + "." + thumbnail.extension;
    }
    return "";
  }

  /**
   * Adiciona as informações as variaveis e abre a modal
   * @param content 
   * @param data Dados a serem exibidos no modal
   * @param title Titulo do modal (Comics ou Events)
   */
  openModal(content, data, title) {
    this.modalTitle = title;
    this.modalName = data.title;
    this.modalDescription = data.description;
    this.modalThumbnail = this.getImageUrl(data.thumbnail);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
  }

}
