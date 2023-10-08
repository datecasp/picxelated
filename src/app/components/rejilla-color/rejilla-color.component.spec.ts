import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejillaColorComponent } from './rejilla-color.component';

describe('RejillaColorComponent', () => {
  let component: RejillaColorComponent;
  let fixture: ComponentFixture<RejillaColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejillaColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejillaColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
