import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../model/rol'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private GET_ROL_URL:string='http://localhost:8080/proyectoserver/rs/practicaws/listarRol';
  private SEND_ROL_URL:string='http://localhost:8080/proyectoserver/rs/practicaws/crearRol';

  constructor(private http: HttpClient) { }

  getRol():Observable<any[]>{
    return this.http.get<Rol[]>(this.GET_ROL_URL);
  }

  sendRol(rol: Rol): Observable<any>{
    return this.http.post<string>(this.SEND_ROL_URL, rol);
  }
}
