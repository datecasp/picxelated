import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejillaComponent } from './rejilla.component';

describe('RejillaComponent', () => {
  let component: RejillaComponent;
  let fixture: ComponentFixture<RejillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
