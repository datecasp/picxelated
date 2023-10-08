import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaColorComponent } from './fila-color.component';

describe('FilaColorComponent', () => {
  let component: FilaColorComponent;
  let fixture: ComponentFixture<FilaColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilaColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
