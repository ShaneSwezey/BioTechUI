import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Position } from '../models/Position';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { pipe } from '../../../node_modules/@angular/core/src/render3/pipe';

@Injectable({
  providedIn: 'root'
})
export class BiotechapiService {

  private biotechapiUrl: string = 'https://localhost:44366/api';

  constructor(private http: HttpClient) { }

  public getPositions():Observable<Position[]> {
    return this.http.get<Position[]>(`${this.biotechapiUrl}/positions`);
  }

  public postNewsLetterSubscriber(emailAddress: string) {
    console.log(`email address test: ${emailAddress}`);
    //this.http.post(`${this.biotechapiUrl}/NewsLetter/CreateAsync`, emailAddress);
  }

  public postQuestion(name: string, emailAddress: string, question: string) {
    console.log(`name: ${name} emailAddress: ${emailAddress} qustion: ${question}`);
  }

}
