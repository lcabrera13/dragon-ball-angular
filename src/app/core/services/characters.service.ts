import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterDetail, Pagination } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private apiUrl = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) { }

  getCharacters(url?: string): Observable<Pagination> {
    url = url ? url : `${this.apiUrl}?limit=12`
    return this.http.get<Pagination>(url)
  }

  getCharacter(id: string| null): Observable<CharacterDetail> {
    return this.http.get<CharacterDetail>(`${this.apiUrl}/${id}`)
  }
}
