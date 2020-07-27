import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Paciente } from '../shared/model/paciente';
import { RestService } from '../shared/services/rest.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.page.html',
  styleUrls: ['./crear-paciente.page.scss'],
})
export class CrearPacientePage implements OnInit {

  paciente: Paciente = new Paciente();

  constructor(private restService: RestService, private toastController: ToastController) { }

  ngOnInit() {
  }

 async guardar(){
    const toast = await this.toastController.create({
      message: 'Se guardo el paciente',
      duration: 2000
    });
    this.restService.savePaciente(this.paciente).subscribe(data=>{
      console.log(data);
    })
    toast.present();
  }

}
