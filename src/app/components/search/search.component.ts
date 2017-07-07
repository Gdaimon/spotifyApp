import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component ( {
  selector   : "app-search",
  templateUrl: "./search.component.html",
  styleUrls  : [ "./search.component.css" ]
} )
export class SearchComponent implements OnInit {
  
  termino : string = "";
  artistas = [];
  
  constructor ( private _spotifyServises : SpotifyService ) {
  }
  
  ngOnInit () {
  }
  
  buscarArtista () {
    
    console.log ( this.termino );
    if ( this.termino.length > 0 ) {
      this._spotifyServises.getArtistas ( this.termino )
        .subscribe ( data => this.artistas = data );
    }
  }
  
}
