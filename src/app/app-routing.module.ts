
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'crear-rol',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'listar-rol',
    loadChildren: () => import('./shared/paginas/listar-rol/listar-rol.module').then( m => m.ListarRolPageModule)
  },
  {
    path: 'crear-rol',
    loadChildren: () => import('./shared/paginas/crear-rol/crear-rol.module').then( m => m.CrearRolPageModule)
  },
  {
    path: 'crear-paciente',
    loadChildren: () => import('./crear-paciente/crear-paciente.module').then( m => m.CrearPacientePageModule)
  },
  {
    path: 'listar-paciente',
    loadChildren: () => import('./shared/paginas/listar-paciente/listar-paciente.module').then( m => m.ListarPacientePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
