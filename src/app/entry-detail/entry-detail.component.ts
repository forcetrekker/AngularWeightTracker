import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { EntriesService } from '../entries.service';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {
  entry: Entry;
  recordId: string;

  constructor(private entriesService: EntriesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    
    this.entry = this.entriesService.getEntries().value[+id];
    console.log("this.entry", this.entry);


  }

}
