import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeScreenComponent } from "./home-screen/home-screen.component";
import { SchedulingScreenComponent } from "./scheduling-screen/scheduling-screen.component";

const routes: Routes = [
  {
    path: "",
    component: HomeScreenComponent,
    children: [
      {
        path: "scheduling",
        component: SchedulingScreenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
