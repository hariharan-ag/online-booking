import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rec350Component } from './rec350.component';

describe('Rec350Component', () => {
  let component: Rec350Component;
  let fixture: ComponentFixture<Rec350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rec350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rec350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
