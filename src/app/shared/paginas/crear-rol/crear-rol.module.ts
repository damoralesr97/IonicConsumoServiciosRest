import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearRolPageRoutingModule } from './crear-rol-routing.module';

import { CrearRolPage } from './crear-rol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearRolPageRoutingModule
  ],
  declarations: [CrearRolPage]
})
export class CrearRolPageModule {}
