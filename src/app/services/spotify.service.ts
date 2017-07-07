import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";


@Injectable ()
export class SpotifyService {
  
  artistas : any = [];
  artista : string;
  
  urlBusqueda : string = "https://api.spotify.com/v1/search";
  urlArtista : string = "https://api.spotify.com/v1/artists";
  // "https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/top-tracks?country=US"
  // "https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB//top-tracks?country=US"
  constructor ( private http : Http ) {
  }
  
  getArtistas ( termino : string ) {
    
    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;
    return this.http.get ( url )
      .map ( response => {
        // console.log ( response.json () );
        // console.log ( response.json ().artists.items );
        // this.artistas = response.json ().artists.items;
        // console.log ( this.artistas );
        return response.json ().artists.items;
      } );
  }
  
  getArtista ( termino : string ) {
    
    let query = `/${termino}`;
    let url = this.urlArtista + query;
    return this.http.get ( url )
      .map ( response => {
        console.log ( response.json () );
        return response.json ();
      } );
  }
  
  getTopArtista ( termino : string ) {
    
    let query = `/${termino}/top-tracks?country=US`;
    let url = this.urlArtista + query;
    return this.http.get ( url )
      .map ( response => {
        console.log ( response.json ().tracks );
        return response.json ().tracks;
      } );
  }
  
  
}
