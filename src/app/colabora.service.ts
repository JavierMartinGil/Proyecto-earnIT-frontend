import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColaboraService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/colabora"
  }

  nuevo(values) {
    return this.http.post(`${this.baseUrl}/nuevo`, values).toPromise();
  }
}
