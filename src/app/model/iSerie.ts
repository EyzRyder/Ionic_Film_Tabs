export interface ISerie {
    nome: string;
    temporada: string;
    duracao: string;
    sinopse: string;
    classificacao: number;
    cartaz: string;
    generos: string[];
    pagina?: string;
    favorito: boolean;
}