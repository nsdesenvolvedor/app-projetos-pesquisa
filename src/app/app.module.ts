import { CriarEditarProjetoPageModule } from './paginas/criar-editar-projeto/criar-editar-projeto.module';
import { AppService } from './app.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageModule } from './paginas/login/login.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, LoginPageModule, CriarEditarProjetoPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
