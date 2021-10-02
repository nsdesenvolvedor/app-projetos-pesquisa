import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarEditarProjetoPageRoutingModule } from './criar-editar-projeto-routing.module';

import { CriarEditarProjetoPage } from './criar-editar-projeto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarEditarProjetoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CriarEditarProjetoPage]
})
export class CriarEditarProjetoPageModule {}
