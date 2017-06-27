import {Component, OnInit, Input} from '@angular/core';
import {Recept} from "./recept";

@Component({
  selector: 'app-recepti',
  templateUrl: './recepti.component.html',
  styleUrls: ['./recepti.component.css']
})
export class ReceptiComponent implements OnInit {
  selectedRecept: Recept;

  constructor() { }

  ngOnInit() {
  }

}
