import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginData } from "src/models/LoginData";
import { API_URL } from "../../config/api.config";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticate = (loginData: LoginData) => {
    return this.http.post(`${API_URL}auth/login`, loginData);
  };
}
