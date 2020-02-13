import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDragonComponent } from './new-dragon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatSelectModule, MatSnackBarModule, MatInputModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NewDragonComponent', () => {
  let component: NewDragonComponent;
  let fixture: ComponentFixture<NewDragonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        RouterTestingModule,
        MatSnackBarModule,
        HttpClientModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [ NewDragonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente criado.', () => {
    expect(component).toBeTruthy();
  });
});
