import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorPermissaoPage } from './error-permissao.page';

const routes: Routes = [
  {
    path: '',
    component: ErrorPermissaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorPermissaoPageRoutingModule {}
