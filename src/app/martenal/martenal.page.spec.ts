import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MartenalPage } from './martenal.page';

describe('MartenalPage', () => {
  let component: MartenalPage;
  let fixture: ComponentFixture<MartenalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MartenalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MartenalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
