import { User } from "./User";

export interface LoginResponse {
  data: LoginResponseData;
  success: boolean;
  message: string;
}

export interface LoginResponseData {
  token: string;
  user: User;
}
