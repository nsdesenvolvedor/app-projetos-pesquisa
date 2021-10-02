import { BaseForm } from 'src/app/models/base-form';
import { EStatusProjetoPesquisa } from './../../enums/EStatusProjetoPesquisa';
import { Router } from '@angular/router';
import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { ProjetoPesquisa } from 'src/app/models/projeto-pesquisa';
import { ETipoUsuario } from 'src/app/enums/ETipoUsuario';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.page.html',
  styleUrls: ['./projetos.page.scss'],
})
export class ProjetosPage extends BaseForm implements OnInit {

  projetosPesquisas: ProjetoPesquisa[] = [];

  constructor(protected appService: AppService, protected router: Router, ) {
    super(appService, router, ETipoUsuario.administrador);
  }

  ngOnInit(): void {
    this.redirecionarUsuario();
    this.projetosPesquisas = this.appService.projetosPesquisas;
  }

  public setarStatusEmAndamento(idUsuario: number) {
    this.setarStatus(idUsuario, EStatusProjetoPesquisa.emAndamento);
  }

  public setarStatusPendencia(idUsuario: number) {
    this.setarStatus(idUsuario, EStatusProjetoPesquisa.pendencias);
  }

  public setarStatusConcluido(idUsuario: number) {
    this.setarStatus(idUsuario, EStatusProjetoPesquisa.concluido);
  }

  private setarStatus(idUsuario: number, statusProjeto: EStatusProjetoPesquisa): void {
    const projeto = this.appService.obterProjetoPorId(idUsuario);
    projeto.statusProjeto = statusProjeto;
    this.appService.editarProjeto(projeto);
  }
}
