import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Position } from '../models/Position';
import { BiotechapiService } from '../services/biotechapiservice.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
})
export class CareersComponent implements OnInit {

  private positionList = [];

  constructor(private BioService: BiotechapiService) { }

  ngOnInit() {
    this.BioService.getPositions().subscribe(res =>
      this.positionList = res, 
      err => console.error(err), 
      //() => console.log(this.positionList)
    );
    this.expandPostings();
  }

  public expandPostings() {
    let acc = document.getElementsByClassName("accordion");
    console.log(acc);

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
