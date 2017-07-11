import { Component, OnInit, OnDestroy, Input  } from '@angular/core';
import { Recept } from '../recept';
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ReceptService} from "../recept.service";

@Component({
  selector: 'app-recepti-detalji',
  templateUrl: './recepti-detalji.component.html',
  styleUrls: ['./recepti-detalji.component.css']
})
export class ReceptiDetaljiComponent implements OnInit {

  selectedRecept: Recept;

    private receptiIndex: number; // Setiran je u onInit metodi. U taj detail komponentu cemo navigirati preko prenešenog ID-a. To je ruta {path: ':id', component: ReceptiDetailsComponent}. Recept ID ce se extraktirati iz URL-a u ngOnInit metodi !
    private subscription: Subscription;




    constructor(
                private shopingListServis: ShoppingListService,
                private router: Router,
                private route: ActivatedRoute,
                private receptiServis: ReceptService
    ) {}



    ngOnInit() {    /* Kako bi extraktirali ID od selektiranog recepta moramo extraktirati Aktiviranu rutu iz URLa. */

      this.subscription =  this.route.params.subscribe(
          (params: any) => {
                this.receptiIndex = params['id'];
                this.selectedRecept = this.receptiServis.getRecepte(this.receptiIndex);
          }
      );                                                       /* Pristupamo aktiviranoj ruti, dodajemo PARAMS Observarble kako bi izmjene na ID-u recepta bile dinamične.
                                                                  User moze mjenjati ID dok je na detail page-u. Na to se Subscribamo. Taj subscription spremamo u varijablu
                                                                  kako bi  se mogli Unsubsribati. Nakon što smo dobili ID iz paramsa, pozivamo SERVIS recept.service.ts kako bi dobavili
                                                                  recept stim ID-om

                                                                   METODE : getRecepte & deleteRecepte ce biti kreirane u servisu.

                                                                      */


  }

  OnDestroy(){
    this.subscription.unsubscribe();
  }

    onEdit(){ // u ovoj metodi zelimo navigirati do EDIT Page-a. Trebamo za to Router inportati.
        this.router.navigate(['recept', this.receptiIndex, 'edit']);
    }

    onDelete(){
        this.receptiServis.deleteRecept(this.selectedRecept);
        this.router.navigate(['/recept']); // nakon sto delete metoda odradi svoje, zelimo da nas vrati na početnu rutu

    }


    addToShoppingList(){
       this.shopingListServis.addItems(this.selectedRecept.ingridient);
    }
}
