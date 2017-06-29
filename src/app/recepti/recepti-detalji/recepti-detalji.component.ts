import { Component, OnInit, Input } from '@angular/core';
import { Recept } from '../recept';
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'app-recepti-detalji',
  templateUrl: './recepti-detalji.component.html',
  styleUrls: ['./recepti-detalji.component.css']
})
export class ReceptiDetaljiComponent implements OnInit {

 @Input() selectedRecept: Recept;


  constructor(private shopingListServis: ShoppingListService) { }

  ngOnInit() {
  }
    addToShoppingList(){
       this.shopingListServis.addItems(this.selectedRecept.ingridient);
    }
}
