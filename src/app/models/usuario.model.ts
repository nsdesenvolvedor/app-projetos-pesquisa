import { ETipoUsuario } from './../enums/ETipoUsuario';
export class Usuario {
  constructor(
    public id: number
    , public nome: string
    , public login: string
    , public senha: string
    , public tipoUsuario: ETipoUsuario
  ){}

  public obterNomeTipoUsuario(): string {
    switch(this.tipoUsuario) {
      case ETipoUsuario.administrador:
        return 'Administrador';
      case ETipoUsuario.pesquisador:
        return 'Pesquisador';
      default:
         return 'Tipo de Úsuario inválido';
    }
  }
}
