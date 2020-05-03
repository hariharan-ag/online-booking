import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelocComponent } from './reloc.component';

describe('RelocComponent', () => {
  let component: RelocComponent;
  let fixture: ComponentFixture<RelocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
