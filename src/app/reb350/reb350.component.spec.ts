import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reb350Component } from './reb350.component';

describe('Reb350Component', () => {
  let component: Reb350Component;
  let fixture: ComponentFixture<Reb350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reb350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reb350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
