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

  guardar(){
    this.restService.savePaciente(this.paciente).subscribe(data => {
      console.log(data);
      if (data === 'Ok'){
        this.toast('Paciente guardado satisfactoriamente');
      }
    });
  }

  async toast(text: string, duration: number = 2000, position?) {
    const toast = await this.toastController.create({
      message: text,
      position: position || 'middle',
      duration: duration
    });
    await toast.present();
  }


}
