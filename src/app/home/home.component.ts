import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  entries: Entry[];

  title = 'hands-on';

  constructor() { }

  ngOnInit() {
    this.entries = [{
      weight: 70,
      date: new Date(),
      bodyFat: 22
    }];
  }

}
