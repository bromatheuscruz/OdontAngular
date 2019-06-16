export interface LoginResponse {
  data: LoginResponseData;
  success: boolean;
  message: string;
}

export interface LoginResponseData {
  token: string;
  user: User;
}

export interface User {
  id: string;
  email: string;
}
