import { Injectable } from '@angular/core';
import { ENTRIES } from './data/entries';
import { Entry } from './entry';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  constructor() { }

  getEntries(): Observable<Entry[]> {
    return of(ENTRIES);
  }
}
