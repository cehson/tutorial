import { Component, OnInit } from '@angular/core';
import {Ingridients} from "../ingridients";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit {

  item: Ingridients;

  isAdd: boolean = true; // DODAJEMO PROPERTI KOJI PROVJERAVA JESMO LI U "ADD" MODU ILI U "EDIT" MODU.

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(ingridient: Ingridients){
    if(!this.isAdd){
      // edit
    }else{
      this.item = new Ingridients(ingridient.sastojak, ingridient.kolicina);

      this.sls.addItem(this.item);
    }



  }

}
