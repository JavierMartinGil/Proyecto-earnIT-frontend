import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComparaService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/compara"
  }

  comparar(values) {
    return this.http.post(`${this.baseUrl}/salarios`, values).toPromise();
  }
}
