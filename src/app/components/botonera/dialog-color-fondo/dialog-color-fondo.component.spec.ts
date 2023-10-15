import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogColorFondoComponent } from './dialog-color-fondo.component';

describe('DialogColorFondoComponent', () => {
  let component: DialogColorFondoComponent;
  let fixture: ComponentFixture<DialogColorFondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogColorFondoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogColorFondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
