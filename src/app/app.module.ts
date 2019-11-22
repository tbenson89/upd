import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MessagesComponent } from './messages/messages.component';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UsersComponent } from './users/users.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Simulated Server web API package in-memory
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';


@NgModule({
  // COMPONENTS
  declarations: [
    AppComponent,
    HeroesComponent,
    UsersComponent,
    HeroDetailComponent,
    UserDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  // MODULES
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
