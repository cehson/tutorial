import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import {ReceptiStartComponent} from "./recepti-start.component";
import {ReceptiDetaljiComponent} from "./recepti-detalji/recepti-detalji.component";
import {ReceptiEditComponent} from "./recepti-edit/recepti-edit.component";

export const RECIPE_ROUTES: Routes = [
    { path: '', component: ReceptiStartComponent },
    { path: 'new', component: ReceptiEditComponent },
    { path: ':id', component: ReceptiDetaljiComponent }, // kada app prepozna ID u URL-u zelimo da ode na ReceptDetalji komponentu za loadanim receptom pod tim ID-om
    { path: ':id/edit', component: ReceptiEditComponent }
];

export const child_routing = RouterModule.forChild(RECIPE_ROUTES);