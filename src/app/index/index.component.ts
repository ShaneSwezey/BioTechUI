import { Component, OnInit } from '@angular/core';
import { BiotechapiService } from '../services/biotechapiservice.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [ BiotechapiService ]
})
export class IndexComponent implements OnInit {

  constructor(private bioService: BiotechapiService) { }

  ngOnInit() {
  }

  private sendSubscriber(sEmailAddress : string) {
    this.bioService.postNewsLetterSubscriber(sEmailAddress);
  }

}
