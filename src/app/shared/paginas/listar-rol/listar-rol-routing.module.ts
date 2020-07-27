import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarRolPage } from './listar-rol.page';

const routes: Routes = [
  {
    path: '',
    component: ListarRolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarRolPageRoutingModule {}
