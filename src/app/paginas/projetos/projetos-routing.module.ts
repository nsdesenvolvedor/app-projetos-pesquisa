import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetosPage } from './projetos.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetosPageRoutingModule {}
