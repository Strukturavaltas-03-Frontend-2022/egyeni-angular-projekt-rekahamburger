import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { HomeComponent } from './page/home/home.component';
import { KaracsonyComponent } from './page/karacsony/karacsony.component';
import { ReneszanszComponent } from './page/reneszansz/reneszansz.component';
import { SzecesszioComponent } from './page/szecesszio/szecesszio.component';
import { SzimbolizmusComponent } from './page/szimbolizmus/szimbolizmus.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'karacsony',
    component: KaracsonyComponent,
  },
  {
    path: 'szecesszio',
    component: SzecesszioComponent,
  },
  {
    path: 'szimbolizmus',
    component: SzimbolizmusComponent,
  },
  {
    path: 'reneszansz',
    component: ReneszanszComponent,
  },


  {
    path:'admin',
    component: AdminComponent,
  },


  {
    path: '**',
    component: KaracsonyComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
