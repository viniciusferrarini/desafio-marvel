import { DataService } from '../service/data.service';
import { Character } from './character';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})
export class CharacterService extends DataService<Character, number> {
    
    constructor (httpClient: HttpClient) {
        super(httpClient);
    }

    protected getUrl(): string {
        throw new Error("Method not implemented.");
    }

}