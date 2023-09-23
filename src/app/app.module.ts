import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightRowDirective } from './directives/highlight-row.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentsListComponent,
    HighlightRowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
