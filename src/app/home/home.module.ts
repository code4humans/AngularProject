import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './/home-routing.module';
import { HomeContainerComponent } from './home-container.component';
import { HomeOpcion2Component } from './home-opcion2/home-opcion2.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  declarations: [HomeComponent, HomeContainerComponent, HomeOpcion2Component]
})
export class HomeModule { }
