import { Injectable } from '@angular/core';
import { Recept } from './recept';
import {Ingridients} from "../ingridients";

@Injectable()
export class ReceptService {

  private recepti: Recept[] = [
    new Recept('Šnicla', 'blago pečena uz fini sos', 'http://media.foodnetwork.ca/files/2015/07/pork-schnitzel_blogembed.jpg', [
        new Ingridients('svisnjsko meso', 300),
        new Ingridients('krompir', 500),
        new Ingridients('rajčica', 700)
    ]),
    new Recept('Gljive', 'meko dinstane gljivice', 'https://coolinarika-cdn.azureedge.net/image/16ee54cbe427b4a3b94c8cc1e4d787a8_header.jpg?v=1', [
        new Ingridients('gljive', 300),
        new Ingridients('umak', 100)

    ]),
    new Recept('Pizza', 'pizza sa sirom, sunkom i kecapom', 'https://eatpizzafresca.com/images/pepperoni_pizza.jpg?crc=4023861219', [
        new Ingridients('tijesto', 800),
        new  Ingridients('gljive', 100),
        new Ingridients('umak od rajcice', 400)
    ]),
  ]; // Postavljamo PRAZNU listu pojedinačnih recepata





  constructor() { }
   getRecept(){
    return this.recepti;
   }

}
