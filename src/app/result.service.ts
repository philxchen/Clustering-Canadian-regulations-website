import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Params } from './params';
// @ts-ignore
import * as urls from './urls.json';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) {
  }

  getParams$(): Observable<Params[]> {
    return this.http.get<Params[]>(`${urls.API_BASE}/params`);
  }

  getPointsByParams$(params: Params): Observable<Result> {
    return this.http.post<Result>(`${urls.API_BASE}/results`, params, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
