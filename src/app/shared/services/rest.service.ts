import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../model/paciente';
import { Observable } from 'rxjs';
import { Rol } from '../model/rol';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private SAVE_PACIENTE_URL = 'http://localhost:8080/proyectoserver/rs/practicaws/crearPaciente';
  private GET_ROL_URL = 'http://localhost:8080/proyectoserver/rs/practicaws/listarRol';

  constructor(private http: HttpClient) { }

  savePaciente(paciente: Paciente): Observable<any>{
    return this.http.post<string>(this.SAVE_PACIENTE_URL, paciente);
  }


  getRol(): Observable<any[]>{
    return this.http.get<Rol[]>(this.GET_ROL_URL);
  }
}
