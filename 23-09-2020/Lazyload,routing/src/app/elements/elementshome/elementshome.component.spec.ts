import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementshomeComponent } from './elementshome.component';

describe('ElementshomeComponent', () => {
  let component: ElementshomeComponent;
  let fixture: ComponentFixture<ElementshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
