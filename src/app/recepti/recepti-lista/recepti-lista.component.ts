import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recept} from '../recept';
@Component({
    selector: 'app-recepti-lista',
    templateUrl: './recepti-lista.component.html',
    styleUrls: ['./recepti-lista.component.css']
})
export class ReceptiListaComponent implements OnInit {

    recepti: Recept[] = [
        new Recept('Šnicla', 'blago pečena uz fini sos', 'http://media.foodnetwork.ca/files/2015/07/pork-schnitzel_blogembed.jpg', []),
        new Recept('Gljive', 'meko dinstane gljivice', 'https://coolinarika-cdn.azureedge.net/image/16ee54cbe427b4a3b94c8cc1e4d787a8_header.jpg?v=1', []),
        new Recept('Pizza', 'pizza sa sirom, sunkom i kecapom', 'https://eatpizzafresca.com/images/pepperoni_pizza.jpg?crc=4023861219', []),
    ]; // Postavljamo PRAZNU listu pojedinačnih recepata
    @Output() receptSelected = new EventEmitter<Recept>();


    onSelected(recept: Recept){
        this.receptSelected.emit(recept);
    }

    constructor() {
    }

    ngOnInit() {
    }

}
