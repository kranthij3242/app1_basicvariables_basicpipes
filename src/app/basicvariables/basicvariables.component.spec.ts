import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicvariablesComponent } from './basicvariables.component';

describe('BasicvariablesComponent', () => {
  let component: BasicvariablesComponent;
  let fixture: ComponentFixture<BasicvariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicvariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicvariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
