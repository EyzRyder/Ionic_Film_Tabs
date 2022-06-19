import { Component } from '@angular/core';
import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
import { ISerie } from '../model/iFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(
    public router: Router,
    public alertController: AlertController,
    public toastController: ToastController,
  ) { }
  listaSeries: ISerie[] = [
    {
      nome: 'The Boys (2019)',
      temporada: '3',
      duracao: '1',
      sinopse: 'Na trama, conhecemos um mundo em que super-heróis são as maiores celebridades do planeta, e rotineiramente abusam dos seus poderes ao invés de os usarem para o bem.',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg',
      generos: ['Sci-Fi & Fantasy', 'Action & Adventure'],
      pagina: '/the-boys',
      favorito: false
    },
    {
      nome: 'Stranger Things (2016)',
      temporada: '4',
      duracao: '50m',
      sinopse: 'Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são segredos, forças sobrenaturais e uma menina.',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uKYUR8GPkKRCksczYDJb3pwZauo.jpg',
      generos: ['Sci-Fi & Fantasy', 'Drama', 'Mistério'],
      pagina: '/stranger-things',
      favorito: false
    },
    {
      nome: 'Cavaleiro da Lua (2022)',
      temporada: '1',
      duracao: '47m',
      sinopse: 'A série acompanha Steven Grant, um gentil e educado funcionário de uma loja de souvenir, que é atormentado com apagões e memórias de outra vida. Steven descobre que tem transtorno dissociativo de identidade e divide o corpo com o mercenário Marc Spector. À medida que os inimigos de Steven/Marc se voltam para eles, ambos devem navegar em suas complexas identidades enquanto mergulham em um mistério mortal entre os poderosos deuses do Egito.',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/tkc7AVyUoG9VEeDvukN0TVqa24C.jpg',
      generos: ['Action & Adventure', 'Sci-Fi & Fantasy', 'Mistério'],
      pagina: '/cavaleiro-da-lua',
      favorito: false
    },
    {
      nome: 'Pantanal (2022)',
      temporada: '1',
      duracao: '1h45m',
      sinopse: 'Uma das novelas mais presentes no imaginário brasileiro, "Pantanal" é uma saga familiar sobre os Leôncio e os Marruá, que tem como cenário um dos mais ricos ecossistemas do mundo.',
      classificacao: 4,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/wRzDupqEtggcrs9032yNgGNxDA.jpg',
      generos: ['Drama', 'Soap'],
      pagina: '/pantanal',
      favorito: false
    },
    {
      nome: 'Spy x Family (2022)',
      temporada: '1',
      duracao: '24m',
      sinopse: 'A história acompanha um dos maiores espiões do mundo tendo que se infiltrar no país inimigo para eliminar uma figura importante do governo. Como forma de aproximação do seu alvo, ele precisa encontrar uma família, e por conta disso acaba adotando uma garota, e formando um acordo para se casar com uma mulher local. Entretanto, o que ele não imagina, é que a garota na verdade é uma esper(Um indivíduo capaz de realizar telepatia e outras habilidades paranormais.), e sua nova esposa é uma assassina de aluguel.Assim, os três começam a morar juntos, tendo que esconder suas verdadeiras identidades uns dos outros.',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/wJOLiZIDvtmNbOaaHxQrRGzCAEu.jpg',
      generos: ['Animação', 'Comédia', 'Action & Adventure', 'Crime'],
      pagina: '/spy-x-family',
      favorito: false
    },
  ];

  exibirSerie(serie: ISerie) {
    const navigationExtras: NavigationExtras = { state: { paramSerie: serie } };
    this.router.navigate(['serie-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o serie?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            serie.favorito = false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
