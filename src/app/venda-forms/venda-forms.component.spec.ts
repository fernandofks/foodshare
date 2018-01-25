import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaFormsComponent } from './venda-forms.component';

describe('VendaFormsComponent', () => {
  let component: VendaFormsComponent;
  let fixture: ComponentFixture<VendaFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
