import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ETipoUsuario } from 'src/app/enums/ETipoUsuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logou = true;
  form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private appService: AppService) { }

  ngOnInit() {
    this.redirecionarSeUsuarioEstiverLogado();
    this.configurarFormulario();
  }

  public logar() {
    this.appService.logar(this.form.get('login').value, this.form.get('senha').value);
    this.redirecionarSeUsuarioEstiverLogado();
  }

  public hasError(name: string, error: string): boolean {
    const invalido = this.form.get(name).touched && this.form.get(name).errors?.[error];
    if(invalido) { return true; }
    return false;
  }

  private configurarFormulario(): void {
    this.form = this.fb.group({
      login: this.fb.control('', [Validators.required]),
      senha: this.fb.control('', [Validators.required])
    });
  }

  private redirecionarSeUsuarioEstiverLogado(): void {
    const usuarioLogado = this.appService.usuarioLogado !== null && this.appService.usuarioLogado !== undefined;
    const usuarioEhPesquisador = this.appService.usuarioLogado?.tipoUsuario === ETipoUsuario.pesquisador;
    this.logou = usuarioLogado;
    if(usuarioLogado && !usuarioEhPesquisador) {
       this.router.navigate(['projetos']);
    } else if(usuarioLogado) {
      this.router.navigate(['criar-editar-projeto']);
    }
  }
}
