import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginScreenComponent } from "./login-screen/login-screen.component";

@NgModule({
  declarations: [LoginScreenComponent],
  imports: [CommonModule, LoginRoutingModule, FormsModule]
})
export class LoginModule {}