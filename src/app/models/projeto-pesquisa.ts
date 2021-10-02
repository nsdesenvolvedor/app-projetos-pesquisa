import { EStatusProjetoPesquisa } from './../enums/EStatusProjetoPesquisa';
export class ProjetoPesquisa {
   constructor(
     public titulo: string
     , public dataConclusaoEstimada: string
     , public statusProjeto: EStatusProjetoPesquisa
     , public metodologia: string
     , public resultadosEsperados: string
     , public conclusao: string
     , public idUsuario: number
    ) { }

    public obterNomeStatusProjeto(): string {
      switch(this.statusProjeto) {
        case EStatusProjetoPesquisa.criado:
          return 'Criado';
        case EStatusProjetoPesquisa.emAndamento:
          return 'Em Andamento';
        case EStatusProjetoPesquisa.pendencias:
          return 'Pendências';
        case EStatusProjetoPesquisa.concluido:
          return 'Concluído';
        default:
          return 'Status do projeto invalído';
      }
    }
}
