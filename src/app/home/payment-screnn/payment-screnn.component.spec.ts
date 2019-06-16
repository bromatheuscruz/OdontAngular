import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentScrennComponent } from './payment-screnn.component';

describe('PaymentScrennComponent', () => {
  let component: PaymentScrennComponent;
  let fixture: ComponentFixture<PaymentScrennComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentScrennComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentScrennComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
