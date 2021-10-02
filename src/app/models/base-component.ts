import { ETipoUsuario } from './../enums/ETipoUsuario';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

export abstract class BaseComponent {

   constructor(protected appService: AppService, protected router: Router, protected permissaoAcesso: ETipoUsuario){
   }

   public deslogar(): void {
    this.appService.deslogar();
    this.redirecionarUsuario();
   }

   protected redirecionarUsuario(): void {
    const usuarioLogado = this.appService.usuarioLogado !== null && this.appService.usuarioLogado !== undefined;
    const usuarioPossuiPermissao = this.appService.usuarioLogado?.tipoUsuario === this.permissaoAcesso;
    if(!usuarioLogado) {
       this.router.navigate(['login']);
    } else if(!usuarioPossuiPermissao) {
      this.router.navigate(['error-permissao']);
    }
  }

}
