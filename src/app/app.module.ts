import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { APP_ROUTING } from "./app.routes";
import { ArtistaComponent } from "./components/artista/artista.component";
import { HomeComponent } from "./components/home/home.component";
import { SinfotoPipe } from "./components/pipes/sinfoto.pipe";
import { SearchComponent } from "./components/search/search.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { SpotifyService } from "./services/spotify.service";
import { DomseguroPipe } from './components/pipes/domseguro.pipe';

@NgModule ( {
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    ArtistaComponent,
    DomseguroPipe
  ],
  imports     : [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers   : [
    SpotifyService
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
