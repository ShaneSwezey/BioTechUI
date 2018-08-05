import { Component, OnInit } from '@angular/core';
import { BiotechapiService } from '../services/biotechapiservice.service';
import { Observable } from '../../../node_modules/rxjs';
import { Position } from '../models/Position';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
  providers : [ BiotechapiService ]
})
export class CareersComponent implements OnInit {

  private positionList = [];

  constructor(private BioService: BiotechapiService) { }

  ngOnInit() {
    this.BioService.getPosition().subscribe(res => this.positionList = res);
    this.expandPostings();
  }

  public expandPostings() {
    let acc = document.getElementsByClassName("accordion");
        
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
  }

}
