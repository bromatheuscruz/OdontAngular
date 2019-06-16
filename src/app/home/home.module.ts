import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SchedulingScreenComponent } from './scheduling-screen/scheduling-screen.component';
import { PacientScreenComponent } from './pacient-screen/pacient-screen.component';
import { PaymentScrennComponent } from './payment-screnn/payment-screnn.component';
import { DashboardScreenComponent } from './dashboard-screen/dashboard-screen.component';

@NgModule({
  declarations: [HomeScreenComponent, SchedulingScreenComponent, PacientScreenComponent, PaymentScrennComponent, DashboardScreenComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
