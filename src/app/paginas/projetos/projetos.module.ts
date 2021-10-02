import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetosPageRoutingModule } from './projetos-routing.module';

import { ProjetosPage } from './projetos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetosPageRoutingModule
  ],
  declarations: [ProjetosPage]
})
export class ProjetosPageModule {}
