import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  routeObs: Observable<ParamMap>; 
  album : any; //Qui salverò l'artista selezionato
  spotifyServiceObs: Observable<any>;
  constructor( private route: ActivatedRoute, private router: Router, private service: SpotifyService,  private location: Location ) { }

  ngOnInit(): void {
      this.routeObs = this.route.paramMap;
      this.routeObs.subscribe(this.getRouterParam);
  }
  //Ogni volta che viene invocata la route artist/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let albumId = params.get('id'); //Ottengo l'id dai parametri
    console.log (albumId); //Stampo su console
    //spotifyServiceObs va dichiarato
    this.spotifyServiceObs = this.service.getAlbum(albumId) ;
    this.spotifyServiceObs.subscribe((data)=>this.album = data)
  }
  back() : void
  {
    this.location.back();
  }
}