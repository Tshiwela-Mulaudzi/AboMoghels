import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherPhysicalPage } from './mother-physical.page';

describe('MotherPhysicalPage', () => {
  let component: MotherPhysicalPage;
  let fixture: ComponentFixture<MotherPhysicalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotherPhysicalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherPhysicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
