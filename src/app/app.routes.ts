import {Routes, RouterModule} from '@angular/router';


import {ReceptiComponent} from "./recepti/recepti.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RECIPE_ROUTES} from "./recepti/recepti.routes";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: 'recept', pathMatch:'full'},
    {path:'recept', component: ReceptiComponent, children: RECIPE_ROUTES},
    {path:'shopping-lista', component: ShoppingListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);