import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrovagasPage } from './cadastrovagas.page';

describe('CadastrovagasPage', () => {
  let component: CadastrovagasPage;
  let fixture: ComponentFixture<CadastrovagasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrovagasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrovagasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
