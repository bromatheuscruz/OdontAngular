import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SchedulingScreenComponent } from './scheduling-screen/scheduling-screen.component';

@NgModule({
  declarations: [HomeScreenComponent, SchedulingScreenComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
