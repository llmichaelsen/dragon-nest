import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { DragonService } from '../dragon.service';
import { Dragon } from '../dragon';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-dragon',
  templateUrl: './new-dragon.component.html',
  styleUrls: ['./new-dragon.component.scss']
})
export class NewDragonComponent implements OnInit {

  dragonForm: FormGroup;
  editId;
  
  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private dragonService: DragonService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.editId = this.route.snapshot.paramMap.get("id")

    this.initForm();

    if(this.editId){
      this.loadDragonInfo();
    }
  }

  initForm(){
    this.dragonForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      histories: [[]]
    });  
  }  

  loadDragonInfo(){
    this.dragonService.getDragon(this.editId).subscribe(
      res => this.setDragonForm(res),
      error => console.log(error)
    )
  }

  setDragonForm(dragon){
    this.dragonForm.setValue({
      name: dragon.name,
      type: dragon.type,
      histories: []
    });
  }

 

  onSubmit(){

    if (this.dragonForm.invalid) {
      this.openSnackBar('Verifique os campos inválidos', 'Fechar' )
      return;
    }

    let dragon = new Dragon(this.dragonForm.value.name, this.dragonForm.value.type, []);

    if(this.editId){
      this.editDragon(dragon);
    } else {    
      this.createDragon(dragon);
    }
    
  }

  editDragon(dragon){
    this.dragonService.update(this.editId, dragon).subscribe(
      res => this.finalizarOperacao(),
      error => console.log(error)
    )
  }

  createDragon(dragon){
    this.dragonService.create(dragon).subscribe(
      res => this.finalizarOperacao(),
      error => console.log(error)
    );
  }

  finalizarOperacao(){
    this.router.navigate(['/dragons/']);
    this.openSnackBar(`Dragão ${this.editId ? 'editado' : 'criado'} com sucesso`, 'Fechar' );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
