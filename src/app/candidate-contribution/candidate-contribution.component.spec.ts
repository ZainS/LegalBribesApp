import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateContributionComponent } from './candidate-contribution.component';

describe('CandidateContributionComponent', () => {
  let component: CandidateContributionComponent;
  let fixture: ComponentFixture<CandidateContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
