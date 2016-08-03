import {Residencia} from '../classes/residencia';

import {ResidenciaApi} from '../api/residencia.api';

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'list-residencies',
  templateUrl: 'app/web/residencies.component.html',
  directives: [ResidenciesComponent]
})

export class ResidenciesComponent implements OnInit {
  residencies: Residencia[];
  selectedResidencia: Residencia;
  constructor(
    private router: Router,
    private residenciaApi: ResidenciaApi) { }

  getResidencies() {
    this.residenciaApi.getResidencies().then(residencies => this.residencies = residencies);
  }

  ngOnInit() {
    this.getResidencies();
  }
}




