import { TestBed } from '@angular/core/testing';

import { DragonService } from './dragon.service';
import { HttpClientModule } from '@angular/common/http';
import { Dragon } from './dragon';

describe('DragonService', async () => {

  let service: DragonService = null;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  beforeEach(() => {
    service = TestBed.get(DragonService);
  });

  it('Serviço criado.', () => {
    expect(service).toBeTruthy();
  });

  it('Verifica existência da função getAll().', () => {
    expect(service.getAll).toBeTruthy();
  });

  it('Requisição http para lista de dragões recuperou mais que 1 registro.', async () => {

    const dragons: Dragon[] = await service.getAll().toPromise();
    expect(dragons.length).toBeGreaterThan(0);
  });

  it('Requisição http para detalhes de dragão recuperou dados.', async () => {

    const dragons: Dragon[] = await service.getAll().toPromise();
    if (dragons) {
      const dragon: Dragon = await service.getDragon(dragons[0].id).toPromise();
      expect(dragon.name).toBeTruthy();
      expect(dragon.type).toBeTruthy();
      expect(dragon.histories).toBeTruthy();
    } else {
      fail('Não foi possivel recuperar informações.');
    }
  });

  it('Requisição http para edição de um dragão ocorreu com sucesso.', async () => {
    const dragons: Dragon[] = await service.getAll().toPromise();

    if (dragons) {
      const dragon: Dragon = await service.getDragon(dragons[0].id).toPromise();

      dragon.name = dragon.name + '1';

      await service.update(dragon.id, dragon).toPromise();

      const dragonNew: Dragon = await service.getDragon(dragon.id).toPromise();

      expect(dragon.name).toEqual(dragonNew.name);
    } else {
      fail('Não foi possivel recuperar informações.');
    }
  });


});
