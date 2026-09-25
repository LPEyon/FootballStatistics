import {Component, inject, signal, DestroyRef} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular';
import { SportScoreService } from "../services/sportscore.service";
import { SportKeys} from "../enums/sports.enum";
import { Match, StandingsResponse } from "../interfaces/sportscore.interfaces";
import {map, delay } from "rxjs";
import { takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {MatchCardComponent } from "./components/match-card/match-card.component";
import { StandingsTableComponent } from "./components/standings-table/standings-table.component";
import { AccordionSectionComponent} from "./components/accordion-section/accordion-section/accordion-section.component";
import {MAX_PAGE_ITEM_COUNT} from "../constants/shared.constants";
import {SectionTitles} from "../enums/sports.enum";
import {
  MatchCardSkeletonComponent
} from "./components/match-card-skeleton/match-card-skeleton/match-card-skeleton.component";
import {
  StandingsTableSkeletonComponent
} from "./components/standings-table-skeleton/standings-table-skeleton/standings-table-skeleton.component";
import { MatchListSectionComponent } from './components/matches-section/matches-section.component';
import { StandingsSectionComponent } from './components/standings-section/standings-section.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    MatchListSectionComponent,
    StandingsSectionComponent,
  ],
})
export class Tab1Page {
  sport = SportKeys.FOOTBALL;

  readonly recentMatches = signal<Match[]>([]);
  readonly liveMatches = signal<Match[]>([]);
  readonly fixtures = signal<Match[]>([]);
  readonly standings = signal<StandingsResponse | null>(null);
  readonly page = signal<number>(1);

  readonly isLoading = signal(false);
  readonly isLoadingFixtures = signal(false);
  readonly isLoadingStandings = signal(false);

  readonly leagueSlug = 'bundesliga';

  readonly sportService = inject(SportScoreService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly MAX_PAGE_ITEM_COUNT = MAX_PAGE_ITEM_COUNT;
  protected readonly SectionTitles = SectionTitles;

  ngOnInit() {
    this.loadStandings();
    this.loadFixtures();
  }

  ionViewWillEnter() {
    this.page.set(1);
    this.loadMatches();
  }

  private loadMatches() {
    this.isLoading.set(true);

    this.sportService
      .getMatches(this.sport)
      .pipe(
        delay(3000),
        map((response) => response.matches),
        map((matches) => ({
          live: matches.filter((match) => match.status === 'live'),
          recent: matches.filter((match) => match.status === 'finished'),
        })),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (matches) => {
          this.liveMatches.set(matches.live);
          this.recentMatches.set(matches.recent);
          this.isLoading.set(false);
        },
      });
  }

  private loadFixtures() {
    this.isLoadingFixtures.set(true);

    this.sportService
      .getFixtures(this.sport)
      .pipe(delay(3000), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.fixtures.set(data.matches);
          this.isLoadingFixtures.set(false);
        },
      });
  }

  private loadStandings() {
    this.isLoadingStandings.set(true);

    this.sportService
      .getStandings(this.sport, this.leagueSlug)
      .pipe(delay(3000), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.standings.set(data);
          this.isLoadingStandings.set(false);
        },
        error: () => {
          this.isLoading.set(false);
        },
      });
  }

  protected showMoreClicked() {
    this.page.update((p) => ++p);
  }
}
