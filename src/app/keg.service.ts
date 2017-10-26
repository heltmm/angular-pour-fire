import { Injectable } from '@angular/core';
import { Keg } from './keg.model';
import { KEGS } from './kegs';

@Injectable()
export class KegService {

  constructor() { }

  getKegs(){
    return KEGS;
  }
}
