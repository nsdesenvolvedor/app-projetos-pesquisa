import { ETipoUsuario } from './enums/ETipoUsuario';
import { ProjetoPesquisa } from './models/projeto-pesquisa';
import { Usuario } from './models/usuario.model';

export class AppService {
  public usuarioLogado: Usuario;
  public usuarios: Usuario[] = [];
  public projetosPesquisas: ProjetoPesquisa[] = [];

   constructor(){
        this.usuarios.push(new Usuario(1, 'Admin', 'admin', '123456789', ETipoUsuario.administrador));
        this.usuarios.push(new Usuario(2, 'Pesquisador', 'pesquisador', '123456789', ETipoUsuario.pesquisador));
   }

   public logar(login: string, senha: string): Usuario {
      const usuario: Usuario = this.usuarios.find(usuarioDb => usuarioDb.login === login && usuarioDb.senha === senha);
      const usuarioEncontrado = usuario != null && usuario !== undefined;
      if(!usuarioEncontrado) { return usuario; }
      this.usuarioLogado = usuario;
      return usuario;
   }

   public deslogar(): void {
     this.usuarioLogado = null;
   }

   public obterProjetoPorId(idUsuario: number): ProjetoPesquisa {
     return this.projetosPesquisas.find(projeto => projeto.idUsuario === idUsuario);
   }

   public criarProjeto(projetoPesquisa: ProjetoPesquisa): void {
     this.projetosPesquisas.push(projetoPesquisa);
   }

   public editarProjeto(projetoPesquisa: ProjetoPesquisa): void {
     this.projetosPesquisas = this.projetosPesquisas.filter(projeto => projeto.idUsuario !== projetoPesquisa.idUsuario);
     this.projetosPesquisas.push(projetoPesquisa);
   }
}
