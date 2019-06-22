import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginScreenComponent } from "./login-screen/login-screen.component";
import { RegisterComponent } from "./register/register.component";
import { AccessComponent } from "./access/access.component";

const routes: Routes = [
  {
    path: "",
    component: LoginScreenComponent,
    children: [
      {
        path: "",
        component: AccessComponent
      },
      {
        path: "register",
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
