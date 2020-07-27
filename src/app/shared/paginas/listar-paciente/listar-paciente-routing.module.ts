import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarPacientePage } from './listar-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: ListarPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarPacientePageRoutingModule {}
