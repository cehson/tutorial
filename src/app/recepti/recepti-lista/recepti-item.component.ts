import {Component, Input} from '@angular/core';
import { Recept } from '../recept';

@Component({
  selector: 'app-recepti-item',
  templateUrl: './recepti-item.component.html',
  styleUrls: ['./recepti-item.component.css']
})
export class ReceptiItemComponent {
  @Input() recept: Recept;
  @Input() receptID: number ;





}
