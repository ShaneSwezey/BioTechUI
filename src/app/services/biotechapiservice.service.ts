import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Position } from '../models/Position';
import { Observable } from '../../../node_modules/rxjs';



@Injectable({
  providedIn: 'root'
})
export class BiotechapiService {

  private biotechapiUrl = 'https://localhost:44366/api';

  constructor(private http: HttpClient) { }

  public getPosition(): Observable<Position[]> {
    return this.http.get<Position[]>(`${this.biotechapiUrl}/positions`);
  }
}
