import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarEditarProjetoPage } from './criar-editar-projeto.page';

const routes: Routes = [
  {
    path: '',
    component: CriarEditarProjetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class CriarEditarProjetoPageRoutingModule {}
