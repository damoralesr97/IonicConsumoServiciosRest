import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearRolPage } from './crear-rol.page';

const routes: Routes = [
  {
    path: '',
    component: CrearRolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearRolPageRoutingModule {}
