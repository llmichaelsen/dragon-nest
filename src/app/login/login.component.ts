import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { HelperService } from '../shared/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginServ: LoginService,
    private helperServ: HelperService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){

    this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
    });
  }

  onSubmit(){

    if (this.loginForm.invalid) {
      this.helperServ.openSnackBar('E-mail e/ou senha inválidos', 'Fechar');
      return;
    }     
    this.loginServ.login(this.loginForm.value.email);
  }


}
