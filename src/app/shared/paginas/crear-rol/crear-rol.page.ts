import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../../model/rol';
import { RestService } from './../../services/rest.service';
@Component({
  selector: 'app-crear-rol',
  templateUrl: './crear-rol.page.html',
  styleUrls: ['./crear-rol.page.scss'],
})
export class CrearRolPage implements OnInit {

  constructor(private restService: RestService) { }
  rol: Rol = new Rol();
  ngOnInit() {
  }

  guardar(){
    this.restService.sendRol(this.rol).subscribe(data=>{
      console.log(data);
    })
  }

}
