import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Ifilme } from '../model/iFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public router: Router,
    public alertController: AlertController,
    public toastController: ToastController,
  ) { }
  listaFilmes: Ifilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50',
      classificacao: 5,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação','Fantasia','Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vinagadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção cientifica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Homem-Aranha: Sem Volta Para Casa (2021)',
      lancamento: '16/12/2021 (BR)',
      duracao: '2h29m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
      generos: ['Aventura', 'Ficção cientifica', 'Ação'],
      pagina: '/homemAranha',
      favorito: false
    },
    {
      nome: 'Morbius (2022)',
      lancamento: '31/03/2022 (BR)',
      duracao: '1h45m',
      classificacao: 5,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg',
      generos: ['Fantasia', 'Ficção cientifica', 'Ação'],
      pagina: '/morbius',
      favorito: false
    },
    {
      nome: 'Dragonball - Evolução (2009)',
      lancamento: '09/04/2009 (BR)',
      duracao: '1h25m',
      classificacao: 2,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/23PcKOqNdhKeMFzORzQGn5eC44N.jpg',
      generos: ['Ação', 'Aventura', 'Fantasia', 'Ficção científica', 'Thriller'],
      pagina: '/db',
      favorito: false
    },
  ];
  exibirFilme(filme: Ifilme) {
    const navigationExtras: NavigationExtras = { state: { paraFilme: filme } };
    this.router.navigate(['filme-detalhe'], navigationExtras);
  }
  async exibirAlertFavorito(filme: Ifilme) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          handler: () => {
            filme.favorito = false;
          }
        },
        {
          text: 'Sim, Fovoritar',
          handler: () => {
            filme.favorito = true;
            this.apresentarToast();
          }
        },
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
