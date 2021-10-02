import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrorPermissaoPageRoutingModule } from './error-permissao-routing.module';

import { ErrorPermissaoPage } from './error-permissao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrorPermissaoPageRoutingModule
  ],
  declarations: [ErrorPermissaoPage]
})
export class ErrorPermissaoPageModule {}
