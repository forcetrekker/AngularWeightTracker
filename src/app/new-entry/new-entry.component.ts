import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule }   from '@angular/forms';
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
    console.log("sending data");
    this.newEntry.emit(this.entry);
    this.entry = new Entry();
  }

}
