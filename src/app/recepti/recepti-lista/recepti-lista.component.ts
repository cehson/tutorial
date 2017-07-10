import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recept} from '../recept';
import {ReceptService} from "../recept.service";
@Component({
    selector: 'app-recepti-lista',
    templateUrl: './recepti-lista.component.html',
    styleUrls: ['./recepti-lista.component.css']
})
export class ReceptiListaComponent implements OnInit {



    onSelected(recept: Recept){
        this.receptSelected.emit(recept);
    }

    constructor(private recept: ReceptService) {
    }

    ngOnInit() {
        this.recepti = this.recept.getRecept();
    }
    recepti: Recept[] = []; // Postavljamo PRAZNU listu pojedinačnih recepata
    @Output() receptSelected = new EventEmitter<Recept>();
}
