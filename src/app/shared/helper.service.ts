import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  datetimeToString(date){
    let ano = date.substring(0,4);
    let mes = date.substring(5,7);
    let dia = date.substring(8,10);

    let time = date.substring(11,16)

    return `${dia}/${mes}/${ano} ${time}`
  }

}
