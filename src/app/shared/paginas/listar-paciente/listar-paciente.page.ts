import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Paciente } from '../../model/paciente';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.page.html',
  styleUrls: ['./listar-paciente.page.scss'],
})
export class ListarPacientePage implements OnInit {
  paciente: Observable<Paciente[]>;
  constructor(private restService: RestService) { }

  ngOnInit() {
    this.paciente = this.restService.getPaciente();
  }

}

