import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarPacientePageRoutingModule } from './listar-paciente-routing.module';

import { ListarPacientePage } from './listar-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarPacientePageRoutingModule
  ],
  declarations: [ListarPacientePage]
})
export class ListarPacientePageModule {}
