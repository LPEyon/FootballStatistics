import { Component, DestroyRef, effect, inject, input, signal } from '@angular/core';
import { IonButton } from "@ionic/angular";
import { SportScoreService } from '../../../services/sportscore.service';
import { SportKeys, SectionTitles } from '../../../enums/sports.enum';
import { Match } from '../../../interfaces/sportscore.interfaces';
import { MatchCardComponent } from '../match-card/match-card.component';
import { MAX_PAGE_ITEM_COUNT } from '../../../constants/shared.constants';
import { MatchCardSkeletonComponent } from '../match-card-skeleton/match-card-skeleton/match-card-skeleton.component';
import { AccordionSectionComponent } from '../accordion-section/accordion-section/accordion-section.component';
import { map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-matches-section',
  templateUrl: './matches-section.component.html',
  imports: [
    IonButton,
    MatchCardComponent,
    MatchCardSkeletonComponent,
    AccordionSectionComponent,
  ],
})
export class MatchListSectionComponent {
  readonly title = input.required<SectionTitles>();
  readonly matches = input<Match[]>([]);
  readonly isLoading = input<boolean>(false);
  readonly isOpen = input<boolean>(false);

  readonly page = signal(1);

  protected readonly MAX_PAGE_ITEM_COUNT = MAX_PAGE_ITEM_COUNT;

  protected showMoreClicked() {
    this.page.update(p => ++p);
  }
}

