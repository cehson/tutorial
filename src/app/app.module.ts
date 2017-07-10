import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ReceptiComponent } from './recepti/recepti.component';
import { ReceptiListaComponent } from './recepti/recepti-lista/recepti-lista.component';
import { ReceptiItemComponent } from './recepti/recepti-lista/recepti-item.component';
import { ReceptiDetaljiComponent } from './recepti/recepti-detalji/recepti-detalji.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import {ReceptService} from "./recepti/recept.service";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {routing} from "./app.routes";
import { ReceptiStartComponent } from './recepti/recepti-start.component';
import { ReceptiEditComponent } from './recepti/recepti-edit/recepti-edit.component';
import {child_routing} from "./recepti/recepti.routes";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceptiComponent,
    ReceptiListaComponent,
    ReceptiItemComponent,
    ReceptiDetaljiComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective,
    ReceptiStartComponent,
    ReceptiEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    child_routing
  ],
  providers: [ReceptService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
