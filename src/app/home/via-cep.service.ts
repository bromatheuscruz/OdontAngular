import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_VIA_CEP_URL } from 'src/config/api.config';
import { ViaCepResponseData } from 'src/models/ViaCepResponseData';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  constructor(private http: HttpClient) { }

  getCep = (cep: string) => {
    return this.http.get<ViaCepResponseData>(API_VIA_CEP_URL.replace("${cep}", cep));
  }
}
