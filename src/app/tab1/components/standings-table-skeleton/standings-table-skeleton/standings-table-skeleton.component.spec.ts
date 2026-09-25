import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsTableSkeletonComponent } from './standings-table-skeleton.component';

describe('StandingsTableSkeletonComponent', () => {
  let component: StandingsTableSkeletonComponent;
  let fixture: ComponentFixture<StandingsTableSkeletonComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingsTableSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
