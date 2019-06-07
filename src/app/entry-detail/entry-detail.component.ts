import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { EntriesService } from '../entries.service';
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
        let id = +this.route.snapshot.params.id;
        this.entriesService.getEntries().subscribe(entries => {
            this.entry = entries.find(e => {
                return e.id === id;
            })
        })
        
    }
}