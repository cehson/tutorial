import {Routes, RouterModule} from '@angular/router';


import {ReceptiComponent} from "./recepti/recepti.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: 'recept', pathMatch:'full'},
    {path:'recept', component: ReceptiComponent},
    {path:'shopping-lista', component: ShoppingListComponent}
];

export const routing = RouterModule.forRoot(
    APP_ROUTES
);