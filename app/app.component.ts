import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import {ResidenciaApi} from './api/residencia.api';

@Component({
    selector: 'my-app',
    template: '<h1>hahahah</h1><router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ResidenciaApi
    ],
})
export class AppComponent {
    title = 'ECOT ets el millor';
 }
