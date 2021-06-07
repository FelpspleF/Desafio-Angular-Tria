import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Weather } from "../models/weather.model";

@Injectable({
    providedIn: "root",
})

export class WeatherService {
    
    baseUrl = "http://localhost:3001/weather";

    constructor(private http: HttpClient) {}

    read(): Observable<Weather[]> {
        return this.http.get<Weather[]>(this.baseUrl).pipe(
          map((obj) => obj),
          //catchError((e) => this.errorHandler(e))
        );
    }
}