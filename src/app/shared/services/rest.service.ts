import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../model/rol'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private GET_ROL_URL:string='http://localhost:8080/proyectoserver/rs/practicaws/listarRol';

  constructor(private http: HttpClient) { }

  getRol():Observable<any[]>{
    return this.http.get<Rol[]>(this.GET_ROL_URL);
  }
}
