import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export abstract class DataService {
    
    constructor(private httpClient: HttpClient) {}

    get<T>(url: string): Observable<T> {
        return this.httpClient.get<T>(url);
    }

}