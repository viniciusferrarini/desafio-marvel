    
import { Injectable } from '@angular/core';
import { Character } from '../model/character';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    characters: Character[] = [];

    constructor(private toastrService: ToastrService) {}

    /**
     * Busca todos os favoritos na localstorage
     */
    findAll(): Character[] {
        if(localStorage.getItem('favorites') !== null){
            return JSON.parse(localStorage.getItem('favorites'));
        }
        return this.characters = [];
    }

    /**
     * Verifica se o id é favorito
     * @param id 
     */
    isFavorite(id: number): boolean {
        let isFav = false;
        this.characters = this.findAll();
        for (let i = 0; i < this.characters.length; i++){
            if (this.characters[i].id === id){
                isFav = true;
            }
        }
        return isFav;
    }

    /**
     * Salva um novo favorito
     */
    saveFavorite(character: Character): void {
        this.characters = this.findAll();
        this.characters.push(character);
        localStorage.setItem('favorites', JSON.stringify(this.characters))
        if(this.isFavorite(character.id)){
            this.toastrService.success("Added in the favorites!");
        }
    }

    /**
     * Remove o favorito comparando o id
     * @param id 
     */
    removeFavorite(id: number): void {
        this.characters = this.findAll();
        for (let i = 0; i < this.characters.length; i++){
            if (this.characters[i].id === id){
                this.characters.splice(i, 1);
            }
        }
        localStorage.setItem('favorites', JSON.stringify(this.characters));
        if(!this.isFavorite(id)){
            this.toastrService.warning("Removed from the favorites!");
        }
    }
}