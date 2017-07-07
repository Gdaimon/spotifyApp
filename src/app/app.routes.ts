/**
 * Created by darkklitos on 9/04/17.
 */
import { RouterModule, Routes } from "@angular/router";
import { ArtistaComponent } from "./components/artista/artista.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";

const ROUTES : Routes = [
  { path: "home", component: HomeComponent },
  { path: "buscar", component: SearchComponent },
  { path: "artista/:id", component: ArtistaComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

export class RoutingModule {
}

export const APP_ROUTING = RouterModule.forRoot ( ROUTES, { useHash: true } );
