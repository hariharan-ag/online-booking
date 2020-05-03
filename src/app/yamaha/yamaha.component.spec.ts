import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YamahaComponent } from './yamaha.component';

describe('YamahaComponent', () => {
  let component: YamahaComponent;
  let fixture: ComponentFixture<YamahaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamahaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
