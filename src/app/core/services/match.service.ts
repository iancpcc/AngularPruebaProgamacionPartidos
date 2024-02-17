import { DateProgramation, MathcDescription } from '../models/dates-prg.interface';
import { Observable, map, of, tap } from 'rxjs';

import { API_URL } from '../constants/config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  constructor(
    private http: HttpClient,
    private ngxXml2jsonService: NgxXml2jsonService
  ) {}

  getDates$ = (): Observable<DateProgramation[]> => {
    return this.http
      .get<DateProgramation[]>(`${API_URL}/calendario/fechas/0/1`)
      .pipe(
        map((response: any) => {
          return response as DateProgramation[]; // Mapea a la interfaz Data
        })
      );
  };

  getMatchesProgrammed$ = (date: string | Date): Observable<MathcDescription[]> => {
    return this.http
      .get<MathcDescription[]>(`${API_URL}/programacion/2/0/0/0/0/${date}`)
      .pipe(
        map((response: any) => {
          return response as MathcDescription[]; // Mapea a la interfaz Data
        })
      );
  };


}
