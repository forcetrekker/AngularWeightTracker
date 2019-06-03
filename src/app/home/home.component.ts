import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { EntriesService } from '../entries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  entries: Entry[];

  constructor(private entriesService: EntriesService) { }

  ngOnInit() {
    this.entriesService.getEntries()
      .subscribe(entries => this.entries = entries);
  }

  newEntryHandler(entry: Entry) {
    console.log("entry", entry);
    this.entries.push(entry);
  }

}
