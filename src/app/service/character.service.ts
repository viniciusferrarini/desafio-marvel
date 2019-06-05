import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { CharacterDataWrapper } from '../model/character.data.wrapper';

@Injectable({providedIn: 'root'})
export class CharacterService {
    
    constructor(private dataService: DataService) { }

    findAll(): any {
        return this.dataService.get<CharacterDataWrapper>("");
    }

}