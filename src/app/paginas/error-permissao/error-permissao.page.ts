import { Router } from '@angular/router';
import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-permissao',
  templateUrl: './error-permissao.page.html',
  styleUrls: ['./error-permissao.page.scss'],
})
export class ErrorPermissaoPage implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.redirecionarSeUsuarioNaoEstiverLogado();
  }

  public deslogar(): void {
    this.appService.deslogar();
    this.redirecionarSeUsuarioNaoEstiverLogado();
  }

  private redirecionarSeUsuarioNaoEstiverLogado(): void {
    const usuarioLogado = this.appService.usuarioLogado !== null && this.appService.usuarioLogado !== undefined;
    if(!usuarioLogado) {
       this.router.navigate(['login']);
    }
  }
}
