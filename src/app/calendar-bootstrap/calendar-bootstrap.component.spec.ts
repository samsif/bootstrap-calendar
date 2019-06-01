import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarBootstrapComponent } from './calendar-bootstrap.component';

describe('CalendarBootstrapComponent', () => {
  let component: CalendarBootstrapComponent;
  let fixture: ComponentFixture<CalendarBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
