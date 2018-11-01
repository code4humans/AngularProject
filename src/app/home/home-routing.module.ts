import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeContainerComponent } from './home-container.component';
import { HomeOpcion2Component } from './home-opcion2/home-opcion2.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    children: [
      {
        path : '',
        component: HomeComponent
      },
      {
        path : 'home2',
        component: HomeOpcion2Component
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class HomeRoutingModule { }
