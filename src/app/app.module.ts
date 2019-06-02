import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { NewEntryComponent } from './new-entry/new-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntryDetailComponent,
    NewEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
