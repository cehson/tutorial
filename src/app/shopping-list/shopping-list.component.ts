import { Component, OnInit } from '@angular/core';
import {Ingridients} from "../ingridients";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  items: Ingridients[] = [];
  selectedItem: Ingridients = null;

  constructor(private shopingList: ShoppingListService) {

  }

  ngOnInit() {
    this.items = this.shopingList.getItems();
  }

  onSelecetItem(item: Ingridients){



  }


}
