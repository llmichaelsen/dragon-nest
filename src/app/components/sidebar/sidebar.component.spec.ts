import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By} from '@angular/platform-browser';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('Componente criado.', () => {
    expect(component).toBeTruthy();
  });

  it('Existem três itens no menu lateral.', () => {
    expect(de.query(By.css('.menu-items')).children.length).toEqual(3);
  });

  it('O primeiro item do menu contém "Dragons".', () => {
    expect(de.query(By.css('.menu-items')).children[0].nativeElement.innerText).toContain('Dragon');
  });

});
