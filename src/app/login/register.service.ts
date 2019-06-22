import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "src/config/api.config";
import { User } from "src/models/User";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register = (user: User) => {
    return this.http.post<User>(`${API_URL}users`, user);
  };
}
