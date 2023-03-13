import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getMonstres(): any {
    return this.http.get('http://www.dnd5eapi.co/api/monsters');
  }

  getMonstre(id :string): any {
    return this.http.get('http://www.dnd5eapi.co/api/monsters/'+id);
  }

  // getArtistInfo(id: string): any {
  //   return this.http.get('https://api.artic.edu/api/v1/artists/' + id);
  // }
}
