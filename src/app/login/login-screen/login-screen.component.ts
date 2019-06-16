import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LoginData } from "src/models/LoginData";
import { AuthService } from "../auth.service";
import Storage from "../../../config/storage.config";
import { LoginResponse } from "src/models/LoginResponseData";
import Routes from "../../../config/routes.config";

@Component({
  selector: "app-login-screen",
  templateUrl: "./login-screen.component.html",
  styleUrls: ["./login-screen.component.css"]
})
export class LoginScreenComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  loginData: LoginData = {
    email: "bromatheuscruz@gmail.com",
    password: "123456"
  };

  hasError: boolean;

  login = (): void => {
    this.authService.authenticate(this.loginData).subscribe(
      (response: LoginResponse) => {
        const { token, user } = response.data;
        localStorage.setItem(Storage.storageItems.TOKEN, token);
        localStorage.setItem(Storage.storageItems.USER, JSON.stringify(user));
        this.router.navigate([Routes.HOME]);
      },
      error => {
        this.hasError = true;
      }
    );
  };

  ngOnInit() {}
}
