import { IAtor } from '../model/iFilme';
import { Component } from '@angular/core';
import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(
    public router: Router,
    public alertController: AlertController,
    public toastController: ToastController,
  ) { }
  listaAtores: IAtor[] = [
    {
      nome: 'Lewis Tan',
      biografia: 'Lewis Tan é um ator meio chinês, meio inglês, de cinema, televisão e teatro.',
      atuacao: ['Mortal Kombat como Cole Young'],
      genero: 'Masculino',
      idade: 35,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ik347wakcZRfULiLbjGJpRcqSQz.jpg',
      pagina: '/lewis-tan',
      favorito: false
    },
    {
      nome: 'Robert Downey Jr.',
      biografia: 'Robert John Downey, Jr. (nascido em 4 de abril de 1965) é um ator americano. Downey fez sua estréia na tela em 1970, aos cinco anos de idade, quando apareceu no filme de seu pai, Pound, e trabalhou consistentemente no cinema e na televisão desde então. Durante a década de 1980, ele teve papéis em uma série de filmes de amadurecimento associados ao Brat Pack. Less Than Zero (1987) é particularmente notável, não apenas porque foi a primeira vez que a atuacao de Downey seria reconhecida pelos críticos, mas também porque o papel empurrou o hábito de drogas já existente de Downey um passo adiante. Depois de Zero, Downey começou a ocupar cargos em filmes maiores como Air America (1990), Soapdish (1991) e Natural Born Killers (1994). Ele interpretou Charlie Chaplin no filme de 1992 Chaplin, pelo qual recebeu uma indicação ao Oscar de Melhor Ator.',
      atuacao: ['Vingadores: Ultimato como Tony Stark / Iron Man'],
      genero: 'Masculino',
      idade: 57,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4SLDzrd8C0evBJTy9nVbFeogjXV.jpg',
      pagina: '/robert-downey-jr.',
      favorito: false
    },
    {
      nome: 'Tom Holland',
      biografia: 'Thomas "Tom" Holland é um ator e dançarino inglês, mais conhecido por interpretar o papel principal em Billy Elliot the Musical no Victoria Palace Theatre, Londres, bem como para estrelar o filme de 2012 O Impossível. Por último papel, ele se tornou um vencedor do Hollywood Spotlight Award, bem como do National Board of Review’s award no "Breakthrough Actor" categoria do London Film Critics Circle Awards 2012 em “Young British Performer of the Year”. Ele foi destaque em no Screen International’s “UK Stars of Tomorrow – 2012” e em Variety’s “Youth Impact Report 2012”.',
      atuacao: ['Homem-Aranha: Sem Volta Para Casa como Peter Parker / Spider-Man', 'Vingadores: Ultimato como Peter Parker / Spider-Man'],
      genero: 'Masculino',
      idade: 26,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/bBRlrpJm9XkNSg0YT5LCaxqoFMX.jpg',
      pagina: '/tom-holland',
      favorito: false
    },
    {
      nome: 'Adria Arjona',
      biografia: 'Adria Arjona Torres (nascida em 25 de abril de 1992) é uma atriz porto-riquenha. Ela desempenhou o papel de Anathema Device na adaptação para a TV de Good Omens (2019) e aparecerá no próximo Morbius (2022). Ela é mais conhecida por seus papéis como Emily na segunda temporada da série de antologia da HBO True Detective(2015) e como Dani Silva em dois episódios da série de televisão CBS Person of Interest(em 2014 e 2015), como Anathema Device no Good Omens da minissérie Amazon Prime e por dar voz a personagem Ramirez no popular jogo Fortnite.Ela estrelou a série de televisão NBC Emerald City como Dorothy Gale. Em dezembro de 2018, Arjona entrou em negociações para o spinoff do Homem - Aranha da Sony, Morbius, para interpretar a protagonista feminina do filme, Martine Bancroft; seu envolvimento foi confirmado no final de janeiro. Arjona apareceu como um personagem secundário no filme Operação Fronteira lançado em março de 2019 e, posteriormente, um papel principal no filme Esquadrão 6 da Netflix, lançado em dezembro de 2019.',
      atuacao: ['Morbius como Martine Bancroft'],
      genero: 'Feminino',
      idade: 30,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jUGWrJfUwhOQCUEnWR0CVNkNH08.jpg',
      pagina: '/adria-arjona',
      favorito: false
    },
    {
      nome: 'Karl Urban',
      biografia: 'He is known for playing Éomer in the second and third installments of Peter Jacksons The Lord of the Rings trilogy, Dr.Leonard "Bones" McCoy in the 2009 film Star Trek and Julius Caesar on Xena: Warrior Princess.He played Vaako in The Chronicles of Riddick, the Russian assassin Kirill in The Bourne Supremacy, and Ghost in Pathfinder and won acclaim for his performances in New Zealand films The Price of Milk and Out of the Blue.His father, a German immigrant, owned a leather goods retail store, and his mother once worked for Film Facilities in Wellington, through which the young Urban was exposed to New Zealand cinema and developed an interest in the film industry.Urban attended St Marks Church School, where he showed an early love for public performance. His first acting role came at age eight, when he had a single line in one episode of the New Zealand television series "Pioneer Woman", but he did not act professionally again until after high school.He attended Wellington College in 1990, then Victoria University of Wellington in the Bachelor of Arts programme for one year, but left to pursue his acting career.Over the next few years, he landed several theatre roles in the Wellington area, and eventually he moved to Auckland, where he was offered many guest roles in local shows(one of which was playing a heroin addict in the police drama Shark in the Park).The role which launched him to local fame was that of gay paramedic Jamie Forrest in the hit New Zealand TV series Shortland Street.He appeared on the show for the 1993–1994 season.Urban then moved to Bondi Beach, Sydney, Australia in 1995, returning to New Zealand the following year.',
      atuacao: ['The Boys como Billy Butcher'],
      genero: 'Masculino',
      idade: 50,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/bsAnEFgVm5kn8DbBZKfnlLNll89.jpg',
      pagina: '/karl-urban',
      favorito: false
    },
    {
      nome: 'Jamie Chung',
      biografia: 'Jamie Jilynn Chung (nascida em 10 de abril de 1983) é uma atriz americana conhecida pelo público de reality shows como membro do elenco do reality show da MTV, The Real World: San Diego e seu spin-off, Real World / Road Rules Challenge: The Inferno II, e por suas aparições na TV e filmes, como I Now Pronounce You Chuck and Larry, Sorority Row e Sucker Punch.',
      atuacao: ['Dragonball - Evolução como Chi Chi'],
      genero: 'Feminino',
      idade: 39,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/bnZdPNCY1IErVoyjxLk33Nnje64.jpg',
      pagina: '/jamie-chung',
      favorito: false
    },
    {
      nome: 'Joe Keery',
      biografia: 'Joseph David Keery, mais conhecido como Joe Keery, é um ator norte-americano. É mais conhecido por interpretar Steve Harrington na série Stranger Things da Netflix',
      atuacao: ['Stranger Things (34 episódios) como Steve Harrington'],
      genero: 'Masculino',
      idade: 30,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8B45gAoJx4OvrYqCWid51MBXfeK.jpg',
      pagina: '/joe-keery',
      favorito: false
    },
    {
      nome: 'Oscar Isaac',
      biografia: 'Óscar Isaac Hernández Estrada (born March 9, 1979) is an American actor. After making his acting debut in the late 1990s, he studied acting at the Juilliard School and played small roles for a majority of the 2000s. For portraying José Ramos-Horta in the Australian film Balibo (2006), Isaac won the AACTA Award for Best Actor in a Supporting Role. Following supporting roles in major films such as Body of Lies (2008), Robin Hood (2010) and Drive (2011), Isaac had his breakthrough with the starring role of a singer in the Coen brothers black comedy Inside Llewyn Davis(2013), earning a nomination for a Golden Globe Award. Isaacs career progressed with leading roles in the crime drama A Most Violent Year (2014), the thriller Ex Machina (2015), and the superhero film X-Men: Apocalypse (2016). He became a global star with his starring role as Poe Dameron in the Star Wars sequel trilogy (2015–2019). He has since starred in the science fiction films Annihilation (2018) and Dune (2021), and the crime drama The Card Counter (2021). On television, Isaac has starred in the HBO miniseries Show Me a Hero(2015) and Scenes from a Marriage(2021), winning the Golden Globe Award for Best Actor – Miniseries or Television Film for portraying Nick Wasicsko in the former.In 2022, he began starring as the Marvel Cinematic Universe character Moon Knight in the Disney+ series Moon Knight(2022). Description above from the Wikipedia article Oscar Isaac, licensed under CC - BY - SA, full list of contributors on Wikipedia.',
      atuacao: ['Cavaleiro da Lua (6 episódios) como Marc Spector / Steven Grant / Moon Knight / Mr. Knight'],
      genero: 'Masculino',
      idade: 43,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/dW5U5yrIIPmMjRThR9KT2xH6nTz.jpg',
      pagina: '/oscar-isaac',
      favorito: false
    },
    {
      nome: 'Bella Campos',
      biografia: 'Nao a informacao',
      atuacao: ['Pantanal (84 episódios) como Muda (Maria Ruth)'],
      genero: 'Femenino',
      idade: 30,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9vsUTO5bYfu6FMa8jMaY9gjT40v.jpg',
      pagina: '/bella-campos',
      favorito: false
    },
  ];

  exibirAtor(ator: IAtor) {
    const navigationExtras: NavigationExtras = { state: { paramAtor: ator } };
    this.router.navigate(['ator-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(ator: IAtor) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o serie?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            ator.favorito = false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            ator.favorito = true;
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
