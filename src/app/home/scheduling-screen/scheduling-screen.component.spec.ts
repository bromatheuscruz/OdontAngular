import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingScreenComponent } from './scheduling-screen.component';

describe('SchedulingScreenComponent', () => {
  let component: SchedulingScreenComponent;
  let fixture: ComponentFixture<SchedulingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulingScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
