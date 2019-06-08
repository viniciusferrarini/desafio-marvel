import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { CharacterDataWrapper } from '../model/character.data.wrapper';
import { environment } from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class CharacterService {
    
    constructor(private dataService: DataService) { }

    findAll(): any {
        return this.dataService.get<CharacterDataWrapper>("");
    }

    findByPage(offset: number): any {
        return this.dataService.get<CharacterDataWrapper>(environment.apiUrl + "characters?limit=9&offset=" + offset + "&" + environment.apiKey);
    }

    findById(id: string): any {
        return this.dataService.get<CharacterDataWrapper>(environment.apiUrl + "characters/" + id + "?" + environment.apiKey);
    }

    findComicsByCharacterId(id: string): any {
        return this.dataService.get<CharacterDataWrapper>(environment.apiUrl + "characters/" + id + "/comics?" + environment.apiKey);
    }

    findEventsByCharacterId(id: string): any {
        return this.dataService.get<CharacterDataWrapper>(environment.apiUrl + "characters/" + id + "/events?" + environment.apiKey);
    }

}