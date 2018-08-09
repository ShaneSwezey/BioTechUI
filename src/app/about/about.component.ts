import { Component, OnInit } from '@angular/core';
import { BiotechapiService } from '../services/biotechapiservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  constructor(private bioService: BiotechapiService) { }

  ngOnInit() {
  }

  private sendSubscriber(sEmailAddress : string) {
    this.bioService.postNewsLetterSubscriber(sEmailAddress);
  }

  private submitQuestion(name: string, emailAddress: string, question: string) {
    this.bioService.postQuestion(name, emailAddress, question);
  }

}
