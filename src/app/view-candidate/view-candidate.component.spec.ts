import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCandidateComponent } from './view-candidate.component';

describe('ViewCandidateComponent', () => {
  let component: ViewCandidateComponent;
  let fixture: ComponentFixture<ViewCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCandidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
