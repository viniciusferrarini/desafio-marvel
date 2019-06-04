import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entity } from './entity';
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export abstract class DataService <T extends Entity<ID>, ID> {
    
    constructor(private httpClient: HttpClient) {}

    get<T>(): Observable<T> {
        return this.httpClient.get<T>("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8fcd4ed9b297537f2e25e12f658d2596&hash=c2d72c5c69e9c8a0c4a2fcb1ae8e21be");
    }

    protected abstract getUrl(): string;

}