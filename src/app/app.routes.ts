import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './shared/layout/main/main.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',

  },
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      }
    ]
  }
];
