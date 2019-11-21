import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UsersComponent } from './users/users.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  // COMPONENTS
  declarations: [
    AppComponent,
    HeroesComponent,
    UsersComponent,
    HeroDetailComponent,
    UserDetailComponent
  ],
  // MODULES
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
