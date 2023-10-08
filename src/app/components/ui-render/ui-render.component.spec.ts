import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiRenderComponent } from './ui-render.component';

describe('UiRenderComponent', () => {
  let component: UiRenderComponent;
  let fixture: ComponentFixture<UiRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
