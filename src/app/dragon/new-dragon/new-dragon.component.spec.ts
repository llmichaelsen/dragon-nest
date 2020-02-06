import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDragonComponent } from './new-dragon.component';

describe('NewDragonComponent', () => {
  let component: NewDragonComponent;
  let fixture: ComponentFixture<NewDragonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDragonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
