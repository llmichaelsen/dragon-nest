import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDragonComponent } from './detail-dragon.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';
import { Dragon } from '../dragon';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DetailDragonComponent', () => {
  let component: DetailDragonComponent;
  let fixture: ComponentFixture<DetailDragonComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatSnackBarModule
      ],
      declarations: [ DetailDragonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDragonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
    fixture.autoDetectChanges(true)
  });

  it('Componente criado.', () => {
    expect(component).toBeTruthy();
  });

  it('Verificando se DOM renderizou informações do dragão.', () => {

    const dragon = new Dragon('Julius', 'Challenger', [])
    dragon.createdAt = '2020-02-08T05:57:40.717Z';

    component.setDragon(dragon);
    fixture.detectChanges();

    expect(de.query(By.css('h4.card-title')).nativeElement.innerText).toEqual(dragon.name);
  });
});
