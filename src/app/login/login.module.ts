import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginScreenComponent } from "./login-screen/login-screen.component";
import { RegisterComponent } from "./register/register.component";
import { AccessComponent } from "./access/access.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    LoginScreenComponent, 
    RegisterComponent, 
    AccessComponent
  ],
  imports: [
    CommonModule, 
    LoginRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class LoginModule {}
