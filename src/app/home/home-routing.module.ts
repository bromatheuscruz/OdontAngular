import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeScreenComponent } from "./home-screen/home-screen.component";
import { SchedulingScreenComponent } from "./scheduling-screen/scheduling-screen.component";
import { PacientScreenComponent } from './pacient-screen/pacient-screen.component';
import { PaymentScrennComponent } from './payment-screnn/payment-screnn.component';
import { DashboardScreenComponent } from './dashboard-screen/dashboard-screen.component';

const routes: Routes = [
  {
    path: "",
    component: HomeScreenComponent,
    children: [
      {
        path: "scheduling",
        component: SchedulingScreenComponent
      },
      {
        path: "pacient",
        component: PacientScreenComponent
      },
      {
        path: "payment",
        component: PaymentScrennComponent
      },
      {
        path: "dashboard",
        component: DashboardScreenComponent
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
