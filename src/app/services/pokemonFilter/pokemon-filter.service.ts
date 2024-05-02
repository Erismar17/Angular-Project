import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonFilterService {
  private searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  setSearch (term: string): void {
    this.searchSubject.next(term);
  }

  getSearch (): Observable<string> {
    return this.searchSubject.asObservable();
  }
}