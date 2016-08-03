import { Injectable } from '@angular/core';
import {Residencies} from './mocks/residencia.mock';



@Injectable()
export class ResidenciaApi {

    getResidencies(){
        return Promise.resolve(Residencies);
    }
}