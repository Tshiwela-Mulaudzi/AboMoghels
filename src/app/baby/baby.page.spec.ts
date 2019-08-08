import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyPage } from './baby.page';

describe('BabyPage', () => {
  let component: BabyPage;
  let fixture: ComponentFixture<BabyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
