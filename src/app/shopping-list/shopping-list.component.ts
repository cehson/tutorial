import { Component, OnInit } from '@angular/core';
import {Ingridients} from "../ingridients";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items: Ingridients[] = [];

  constructor() { }

  ngOnInit() {
  }

}
