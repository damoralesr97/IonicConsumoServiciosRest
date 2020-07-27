import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarRolPageRoutingModule } from './listar-rol-routing.module';

import { ListarRolPage } from './listar-rol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarRolPageRoutingModule
  ],
  declarations: [ListarRolPage]
})
export class ListarRolPageModule {}
