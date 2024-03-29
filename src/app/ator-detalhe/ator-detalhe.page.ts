import { IAtor } from './../model/iFilme';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ator-detalhe',
  templateUrl: './ator-detalhe.page.html',
  styleUrls: ['./ator-detalhe.page.scss'],
})
export class AtorDetalhePage implements OnInit {
  ator: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.ator = getNav.extras.state.paramAtor;
      }
    });
  }

}
