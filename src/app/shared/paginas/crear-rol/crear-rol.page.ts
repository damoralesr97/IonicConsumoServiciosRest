import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../../model/rol';
import { RestService } from './../../services/rest.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-crear-rol',
  templateUrl: './crear-rol.page.html',
  styleUrls: ['./crear-rol.page.scss'],
})
export class CrearRolPage implements OnInit {

  constructor(private restService: RestService, public toastController: ToastController) { }
  rol: Rol = new Rol();
  ngOnInit() {
  }

  async guardar(){
    const toast = await this.toastController.create({
      message: 'Se guardo el rol',
      duration: 2000
    });
    this.restService.sendRol(this.rol).subscribe(data=>{
      console.log(data);
    })
    toast.present();
  }

}
