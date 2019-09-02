import { Injectable } from '@angular/core';
import { Vagas } from '../models/vagas.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const API_URL = 'http://localhost:3000';
const httpOptions = {
  headers: new HttpHeaders (
    {'Content-Type' : 'application/json; charset=utf-8'}
  )
};

@Injectable({
  //senha e login do banco de dados....
  providedIn: 'root'
})
export class VagasService {

  constructor(private http: HttpClient) { }

 

 addVaga(vagas: Vagas){
   return this.http.post(`${API_URL}/vaga`, vagas, httpOptions)
 }

getVaga(numbervaga: string){
  return this.http.get<Vagas>(`${API_URL}/vaga?numbervagavaga=${(numbervaga)}`, httpOptions);
}

getVagas(){
  return this.http.get<Vagas[]>(`${API_URL}/vaga`, httpOptions);
}

updateVaga(vagas: Vagas){
  return this.http.post<Vagas>(`${API_URL}/vaga`, vagas, httpOptions);
}

deleteVaga(numbervaga: Vagas){
  return this.http.delete(`${API_URL}/vaga/${numbervaga}`, httpOptions);
}


}
