import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionshomeComponent } from './collectionshome.component';

describe('CollectionshomeComponent', () => {
  let component: CollectionshomeComponent;
  let fixture: ComponentFixture<CollectionshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
