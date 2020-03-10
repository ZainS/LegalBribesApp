import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislatorsStateLookUpComponent } from './legislators-state-look-up.component';

describe('LegislatorsStateLookUpComponent', () => {
  let component: LegislatorsStateLookUpComponent;
  let fixture: ComponentFixture<LegislatorsStateLookUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegislatorsStateLookUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislatorsStateLookUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
