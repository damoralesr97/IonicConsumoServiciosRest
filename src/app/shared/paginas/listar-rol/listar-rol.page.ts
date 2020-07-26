import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../../model/rol';

@Component({
  selector: 'app-listar-rol',
  templateUrl: './listar-rol.page.html',
  styleUrls: ['./listar-rol.page.scss'],
})
export class ListarRolPage implements OnInit {

  rol: Observable<Rol[]>;

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.rol=this.restService.getRol()
  }

}
