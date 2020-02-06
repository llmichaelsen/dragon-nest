import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { DragonService } from '../dragon.service';
import { Dragon } from '../dragon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-dragon',
  templateUrl: './new-dragon.component.html',
  styleUrls: ['./new-dragon.component.scss']
})
export class NewDragonComponent implements OnInit {

  dragonForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private dragonService: DragonService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.dragonForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      histories: [[]]
    });  

  }

  onSubmit(){

    if (this.dragonForm.invalid) {
      this.openSnackBar('Verifique os campos inválidos', 'Fechar' )
      return;
    }

    let dragon = new Dragon(this.dragonForm.value.name, this.dragonForm.value.type, []);
    this.dragonService.create(dragon).subscribe(
      res => this.router.navigate(['/dragons/']),
      error => console.log(error)
    );
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
