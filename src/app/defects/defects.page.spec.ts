import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectsPage } from './defects.page';

describe('DefectsPage', () => {
  let component: DefectsPage;
  let fixture: ComponentFixture<DefectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
