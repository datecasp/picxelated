import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadradoColorComponent } from './cuadrado-color.component';

describe('CuadradoColorComponent', () => {
  let component: CuadradoColorComponent;
  let fixture: ComponentFixture<CuadradoColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadradoColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadradoColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
