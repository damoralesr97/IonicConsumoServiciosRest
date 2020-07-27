import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../model/paciente';
import { Observable } from 'rxjs';
import { Rol } from '../model/rol';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private GET_ROL_URL:string='http://localhost:8080/proyectoserver/rs/practicaws/listarRol';
  private GET_PACIENTE_URL:string='http://localhost:8080/proyectoserver/rs/practicaws/listarPaciente';
  private SEND_ROL_URL:string='http://localhost:8080/proyectoserver/rs/practicaws/crearRol';
  private SAVE_PACIENTE_URL = 'http://localhost:8080/proyectoserver/rs/practicaws/crearPaciente';


  constructor(private http: HttpClient) { }

  savePaciente(paciente: Paciente): Observable<any>{
    return this.http.post<string>(this.SAVE_PACIENTE_URL, paciente);
  }


  getRol(): Observable<any[]>{
    return this.http.get<Rol[]>(this.GET_ROL_URL);
  }

  getPaciente(): Observable<any[]>{
    return this.http.get<Paciente[]>(this.GET_PACIENTE_URL);
  }

  sendRol(rol: Rol): Observable<any>{
    return this.http.post<string>(this.SEND_ROL_URL, rol);
  }
}
