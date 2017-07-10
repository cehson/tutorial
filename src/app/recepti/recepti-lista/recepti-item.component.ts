import {Component, OnInit, Input} from '@angular/core';
import { Recept } from '../recept';

@Component({
  selector: 'app-recepti-item',
  templateUrl: './recepti-item.component.html',
  styleUrls: ['./recepti-item.component.css']
})
export class ReceptiItemComponent implements OnInit {

@Input() recept: Recept;
         receptID: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
