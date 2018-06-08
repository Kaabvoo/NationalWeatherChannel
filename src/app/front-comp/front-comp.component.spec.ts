import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontCompComponent } from './front-comp.component';

describe('FrontCompComponent', () => {
  let component: FrontCompComponent;
  let fixture: ComponentFixture<FrontCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
