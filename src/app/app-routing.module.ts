<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'listar-rol',
    loadChildren: () => import('./shared/paginas/listar-rol/listar-rol.module').then( m => m.ListarRolPageModule)
  },  {
    path: 'crear-rol',
    loadChildren: () => import('./shared/paginas/crear-rol/crear-rol.module').then( m => m.CrearRolPageModule)
=======
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'crear-paciente',
    loadChildren: () => import('./crear-paciente/crear-paciente.module').then( m => m.CrearPacientePageModule)
  },
  {
    path: 'listar-rol',
    loadChildren: () => import('./shared/paginas/listar-rol/listar-rol.module').then( m => m.ListarRolPageModule)
>>>>>>> 9fbc306b4b3e29c3669921bb4d84392c320d575c
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
