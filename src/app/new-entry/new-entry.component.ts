import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {

  @Output() newEntry: EventEmitter<Entry> = new EventEmitter<Entry>();

  entry: Entry = new Entry();
  constructor() { }
  
  ngOnInit() {
  }

  createNewEntry() {
    this.newEntry.emit(this.entry);
    this.entry = new Entry();
  }

}
