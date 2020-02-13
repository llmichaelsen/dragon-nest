import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ServiceBuilder } from 'selenium-webdriver/firefox';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule ]
  }));

  it('Serviço criado.', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  it('Teste de login.', () => {
    const service: LoginService = TestBed.get(LoginService);
    service.login('teste@testes.com');

    expect(localStorage.getItem('user')).toBeTruthy();
  });
});
