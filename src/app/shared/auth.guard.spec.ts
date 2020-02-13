import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '../login/login.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

describe('AuthGuard', () => {

  let loginServ: LoginService = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [AuthGuard, LoginService]
    });
  });

  beforeEach(() => {
    loginServ = TestBed.get(LoginService);
  });

  it('Guarda existe.', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('Validando guarda de rotas.', inject([AuthGuard], (guard: AuthGuard) => {

    loginServ.logout();
    expect(guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: '/dragons'})).not.toBeTruthy();

    loginServ.login('teste@teste.com');
    expect(guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: '/dragons'})).toBeTruthy();

  }));

});
