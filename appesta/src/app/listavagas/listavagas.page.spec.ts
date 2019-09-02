import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListavagasPage } from './listavagas.page';

describe('ListavagasPage', () => {
  let component: ListavagasPage;
  let fixture: ComponentFixture<ListavagasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListavagasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListavagasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
