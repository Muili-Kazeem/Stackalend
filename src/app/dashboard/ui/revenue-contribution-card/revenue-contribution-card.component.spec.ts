import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueContributionCardComponent } from './revenue-contribution-card.component';

describe('RevenueContributionCardComponent', () => {
  let component: RevenueContributionCardComponent;
  let fixture: ComponentFixture<RevenueContributionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RevenueContributionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueContributionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
