import { Injectable } from '@angular/core';
import { Position } from '../models/Position';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BiotechapiService {

  private biotechapiUrl = 'https://localhost:44366/api';

  constructor(private http: HttpClient) { }

  public getPosition() {
    console.log("Working on it..."); 
    let obs = this.http.get(`${this.biotechapiUrl}/positions`);
     obs.subscribe((response) => console.log(response));
  }

}
