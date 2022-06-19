/* eslint-disable eol-last*/
export interface Ifilme{
    nome: string;
    lancamento: string;
    duracao: string;
    classificacao: number;
    cartaz: string;
    generos: string[];
    pagina?: string;
    favorito: boolean;
}

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

export interface IAtor {
    nome: string;
    biografia: string;
    atuacao: string[];
    genero: string;
    idade: number;
    cartaz: string;
    pagina?: string;
    favorito: boolean;
}