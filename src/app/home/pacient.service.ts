import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacient } from 'src/models/Pacient';
import { Observable } from 'rxjs';
import { API_URL } from 'src/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class PacientService {

  constructor(private http: HttpClient) { }

  createPacient = (pacient: Pacient): Observable<Pacient> =>  {
    return  this.http.post<Pacient>(`${API_URL}pacients`, { pacient });
  }
}
