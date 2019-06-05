import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export abstract class DataService {
    
    constructor(private httpClient: HttpClient) {}

    get<T>(url: string): Observable<T> {
        return this.httpClient.get<T>("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8fcd4ed9b297537f2e25e12f658d2596&hash=c2d72c5c69e9c8a0c4a2fcb1ae8e21be");
    }

}