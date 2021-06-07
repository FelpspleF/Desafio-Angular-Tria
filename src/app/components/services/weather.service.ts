import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EMPTY, Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Weather } from "../models/weather.model";

@Injectable({
    providedIn: "root",
})

export class WeatherService {
    
    baseUrl = `https://api.hgbrasil.com/weather?key=a64df013`/*&city_name=${}*/;

    constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, "X", {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
          panelClass: isError ? ["msg-error"] : ["msg-success"],
        });
    }

    read(): Observable<Weather[]> {
        return this.http.get<Weather[]>(this.baseUrl).pipe(
          map((obj) => obj),
          catchError((e) => this.errorHandler(e))
        );
    }

    errorHandler(e: any): Observable<any> {
        this.showMessage("Ocorreu um erro!", true);
        return EMPTY;
    }
}