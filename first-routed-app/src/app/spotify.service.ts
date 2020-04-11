import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAq1t1gjvyEgyMnc4E1AMXIRqNDb_HMFNt_GFtkzWsvaK6mCQPeZ_KxHl6hVtBhVF19qZKl7ULwjR6P94uzmLd-t_-2WfrUUbLnmQjHbc_ypAjxy7o98ShhV4bCuOm6sKNnqNoynCQJUw'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
