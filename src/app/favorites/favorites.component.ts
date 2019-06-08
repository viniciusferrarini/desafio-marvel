import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';
import { Character } from '../model/character';
import { Thumbnail } from '../model/thumbnail';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites: Character[] = [];

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
      this.favorites = this.localStorageService.findAll();
  }

  /**
   * Verifica se o character esta nos favoritos pelo seu id
   * @param id 
   */
  isFavorite(id: number): boolean {
    return this.localStorageService.isFavorite(id);
  }

  /**
   * Remove o character dos favoritos
   * @param character
   */
  removeFavorite(id: number){
    this.localStorageService.removeFavorite(id);
    this.favorites = this.localStorageService.findAll();
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

}
