import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { CharacterDataWrapper } from '../model/character.data.wrapper';
import { environment } from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class ComicService {
    
    constructor(private dataService: DataService) { }
    
    findById(id: string): any {
        return this.dataService.get<CharacterDataWrapper>(environment.apiUrl + "characters/" + id + "?" + environment.apiKey);
    }

}