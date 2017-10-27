import { Injectable } from '@angular/core';
import { Keg } from './keg.model';
import { KEGS } from './kegs';

@Injectable()
export class KegService {

  constructor() { }

  getKegs(){
    return KEGS;
  }
  getKegByTap(kegTap: number){
    for(let i =0; i <= KEGS.length -1; i++){
      if(KEGS[i].tap === kegTap){
        debugger;
        return KEGS[i];
      }
    }
  }
}
