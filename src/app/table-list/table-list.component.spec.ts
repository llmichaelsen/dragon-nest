import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListComponent } from './table-list.component';
import { MatTableModule, MatPaginatorModule, MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragonService } from '../dragon/dragon.service';

describe('TableListComponent', () => {
  let component: TableListComponent;
  let service: DragonService;
  let fixture: ComponentFixture<TableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        RouterTestingModule,
        MatPaginatorModule,
        HttpClientModule,
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
      declarations: [ TableListComponent ],
      providers: [DragonService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(DragonService);
    fixture = TestBed.createComponent(TableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente criado.', () => {
    expect(component).toBeTruthy();
  });

  it('Testando se componente chama DragonService.', async () => {

    const userServiceSpy = spyOn(service, 'getAll').and.callThrough();
    const componentSpy = spyOn(component, 'loadDragons').and.callThrough();

    expect(userServiceSpy).not.toHaveBeenCalled();
    expect(componentSpy).not.toHaveBeenCalled();

    await component.loadDragons();

    expect(userServiceSpy).toHaveBeenCalledTimes(1);
    expect(componentSpy).toHaveBeenCalledTimes(1);

  });

});
