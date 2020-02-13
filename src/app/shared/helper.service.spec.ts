import { TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';
import { MatSnackBarModule } from '@angular/material';

describe('HelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ MatSnackBarModule ]
  }));

  it('Serviço criado.', () => {
    const service: HelperService = TestBed.get(HelperService);
    expect(service).toBeTruthy();
  });

  it('Testando funcionalidade de conversão de data.', () => {
    const service: HelperService = TestBed.get(HelperService);
    const a = service.datetimeToString('2020-02-08T05:57:40.717Z');

    const regex = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4} ([0-2][0-9]):([0-5][0-9])$/);

    expect(a).toMatch(regex);
  });
});
