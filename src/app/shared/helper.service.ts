import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private _snackBar: MatSnackBar) { }

  datetimeToString(date){
    let ano = date.substring(0,4);
    let mes = date.substring(5,7);
    let dia = date.substring(8,10);

    let time = date.substring(11,16)

    return `${dia}/${mes}/${ano} ${time}`
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
