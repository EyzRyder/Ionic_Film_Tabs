import { Component, OnInit } from '@angular/core';
import { Ifilme } from '../model/iFilme';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.page.html',
  styleUrls: ['./filme-detalhe.page.scss'],
})
export class FilmeDetalhePage implements OnInit {
  filme: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.filme = getNav.extras.state.paramFilme;
      }
    });
  }

}
