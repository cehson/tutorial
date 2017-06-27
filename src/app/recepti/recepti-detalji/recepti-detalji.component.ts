import { Component, OnInit, Input } from '@angular/core';
import { Recept } from '../recept';

@Component({
  selector: 'app-recepti-detalji',
  templateUrl: './recepti-detalji.component.html',
  styleUrls: ['./recepti-detalji.component.css']
})
export class ReceptiDetaljiComponent implements OnInit {

 @Input() selectedRecept: Recept;


  constructor() { }

  ngOnInit() {
  }

}
