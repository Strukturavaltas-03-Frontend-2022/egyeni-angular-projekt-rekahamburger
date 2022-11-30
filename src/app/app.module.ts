import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { SzecesszioComponent } from './page/szecesszio/szecesszio.component';
import { SzimbolizmusComponent } from './page/szimbolizmus/szimbolizmus.component';
import { ReneszanszComponent } from './page/reneszansz/reneszansz.component';
import { AdminComponent } from './page/admin/admin.component';
import { KaracsonyComponent } from './page/karacsony/karacsony.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SzecesszioComponent,
    SzimbolizmusComponent,
    ReneszanszComponent,
    AdminComponent,
    KaracsonyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
