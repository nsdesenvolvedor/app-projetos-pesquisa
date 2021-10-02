import { ProjetoPesquisa } from 'src/app/models/projeto-pesquisa';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ETipoOperacao } from './models/ETipoOperacao';
import { Router } from '@angular/router';
import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { ETipoUsuario } from 'src/app/enums/ETipoUsuario';
import { EStatusProjetoPesquisa } from 'src/app/enums/EStatusProjetoPesquisa';
import { BaseForm } from 'src/app/models/base-form';

@Component({
  selector: 'app-criar-editar-projeto',
  templateUrl: './criar-editar-projeto.page.html',
  styleUrls: ['./criar-editar-projeto.page.scss'],
})
export class CriarEditarProjetoPage extends BaseForm implements OnInit {
  operacaoComSucesso = false;
  operacaoCrud: ETipoOperacao;
  form: FormGroup;
  constructor(private fb: FormBuilder, protected appService: AppService, protected router: Router) {
    super(appService, router, ETipoUsuario.pesquisador);
  }

  ngOnInit(): void {
    this.redirecionarUsuario();
    this.definirOperacaoCrud();
    this.configurarFormulario();
  }

  public deslogar(): void {
    this.appService.deslogar();
    this.redirecionarUsuario();
  }

  public submit(): void {
    const projetoPesquisa = new ProjetoPesquisa(
      this.form.get('titulo').value
      , this.form.get('dataConclusaoEstimada').value
      , EStatusProjetoPesquisa.criado
      , this.form.get('metodologia').value
      , this.form.get('resultadosEsperados').value
      , this.form.get('conclusao').value
      , this.appService.usuarioLogado.id);

    this.definirOperacaoCrud();
    if(this.operacaoCrud === ETipoOperacao.criar) {
      this.appService.criarProjeto(projetoPesquisa);
      this.operacaoComSucesso = true;
      return;
    }
    this.appService.editarProjeto(projetoPesquisa);
    this.operacaoComSucesso = true;
  }

  private definirOperacaoCrud(): void {
    const projetoComIdUsuarioLogado = this.appService.obterProjetoPorId(this.appService.usuarioLogado.id);
    const possuiProjeto = projetoComIdUsuarioLogado !== null && projetoComIdUsuarioLogado !== undefined;
    if(possuiProjeto) {this.operacaoCrud = ETipoOperacao.editar;}
    else {this.operacaoCrud = ETipoOperacao.criar;}
  }

  private configurarFormulario(): void {
    const projeto = this.appService.obterProjetoPorId(this.appService.usuarioLogado.id);
    const possuiProjeto = projeto !== null && projeto !== undefined;
    this.form = this.fb.group({
      titulo: this.fb.control(possuiProjeto ? projeto.titulo : '', [Validators.required]),
      dataConclusaoEstimada: this.fb.control(possuiProjeto ? projeto.dataConclusaoEstimada : '', [Validators.required]),
      metodologia: this.fb.control(possuiProjeto ? projeto.metodologia : '', [Validators.required]),
      resultadosEsperados: this.fb.control(possuiProjeto ? projeto.resultadosEsperados : '', [Validators.required]),
      conclusao: this.fb.control(possuiProjeto ? projeto.conclusao : '', [Validators.required]),
    });
  }
}
