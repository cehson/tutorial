import { Injectable } from '@angular/core';
import {Ingridients} from "../ingridients";

@Injectable()
export class ShoppingListService {

  private items: Ingridients[] = [];


  constructor() { }

  getItems(){
    return this.items;
  }
  addItems(items: Ingridients[]){
    Array.prototype.push.apply(this.items, items);
  }

  addItem(item: Ingridients){
    this.items.push(item)
  }

}
