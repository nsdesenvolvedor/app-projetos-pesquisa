import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'projetos',
    loadChildren: () => import('./paginas/projetos/projetos.module').then( m => m.ProjetosPageModule)
  },
  {
    path: 'error-permissao',
    loadChildren: () => import('./paginas/error-permissao/error-permissao.module').then( m => m.ErrorPermissaoPageModule)
  },
  {
    path: 'criar-editar-projeto',
    loadChildren: () => import('./paginas/criar-editar-projeto/criar-editar-projeto.module').then( m => m.CriarEditarProjetoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
