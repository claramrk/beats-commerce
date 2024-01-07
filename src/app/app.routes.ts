import { Routes } from '@angular/router';
import { BeatsComponent } from './beats/beats.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: BeatsComponent },
  { path: 'home', component: HomeComponent },
];
