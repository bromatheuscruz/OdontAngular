import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientScreenComponent } from './pacient-screen.component';

describe('PacientScreenComponent', () => {
  let component: PacientScreenComponent;
  let fixture: ComponentFixture<PacientScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
