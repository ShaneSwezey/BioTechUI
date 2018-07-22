import { Injectable } from '@angular/core';
import { Position } from '../models/Position';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BiotechapiService {

  private biotechapiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  public getPosition() {
    return this.http.get(`${this.biotechapiUrl}/positions`);
  }

}
