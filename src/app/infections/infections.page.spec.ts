import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfectionsPage } from './infections.page';

describe('InfectionsPage', () => {
  let component: InfectionsPage;
  let fixture: ComponentFixture<InfectionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfectionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfectionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
