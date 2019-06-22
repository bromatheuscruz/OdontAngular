import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RegisterService } from "../register.service";
import { User } from "src/models/User";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: [
    "../login-screen/login-screen.component.css",
    "./register.component.css"
  ]
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {}
  ngOnInit() {
    this.registerFormGroup = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      repeatPassword: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  error: string = "Senhas não conferem";
  hasError: boolean;

  get email() {
    return this.registerFormGroup.get("email");
  }

  get password() {
    return this.registerFormGroup.get("password");
  }

  get repeatPassword() {
    return this.registerFormGroup.get("repeatPassword");
  }

  register = () => {
    if (this.password.value !== this.repeatPassword.value) {
      this.hasError = true;
      return;
    }
    const user: User = {
      id: "",
      email: this.email.value,
      password: this.password.value
    };
    this.registerService.register(user).subscribe(response => {
      console.log(response);
    });
  };
}
