import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCardSkeletonComponent } from './match-card-skeleton.component';

describe('MatchCardSkeletonComponent', () => {
  let component: MatchCardSkeletonComponent;
  let fixture: ComponentFixture<MatchCardSkeletonComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
