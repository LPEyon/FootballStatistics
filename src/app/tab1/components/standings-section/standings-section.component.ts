import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { SportScoreService } from '../../../services/sportscore.service';
import { SportKeys, SectionTitles } from '../../../enums/sports.enum';
import { StandingsResponse } from '../../../interfaces/sportscore.interfaces';
import { AccordionSectionComponent } from '../accordion-section/accordion-section/accordion-section.component';
import { StandingsTableComponent } from '../standings-table/standings-table.component';
import { StandingsTableSkeletonComponent } from '../standings-table-skeleton/standings-table-skeleton/standings-table-skeleton.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-standings-section',
  templateUrl: './standings-section.component.html',
  imports: [
    AccordionSectionComponent,
    StandingsTableComponent,
    StandingsTableSkeletonComponent,
  ],
})
export class StandingsSectionComponent {
  readonly standings = input.required<StandingsResponse | null>();
  readonly isLoading = input<boolean>(false);

  protected readonly SectionTitles = SectionTitles;
}
