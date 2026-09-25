import {inject, Injectable} from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { SportKeys } from "../enums/sports.enum";
import {
  MatchResponse,
  FixturesResponse,
  TeamScheduleResponse,
  StandingsResponse
} from "../interfaces/sportscore.interfaces";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class SportScoreService {
  private readonly apiUrl = environment.apiUrl;
  private http = inject(HttpClient);
  constructor() {}

  getMatches(sport: SportKeys, limit: number = 15): Observable<MatchResponse> {
    const params = new HttpParams()
      .set("limit", limit)
      .set('sport', sport);

    return this.http.get<MatchResponse>(`${this.apiUrl}/widget/matches/`, { params });
  }

  getStandings(sport: SportKeys, slug: string): Observable<StandingsResponse> {
    const params = new HttpParams()
      .set("slug", slug)
      .set('sport', sport);

    return this.http.get<StandingsResponse>(`${this.apiUrl}/widget/standings/`, { params });
  }

  getFixtures(sport: SportKeys, date?: string, status?: string): Observable<FixturesResponse> {
    let params = new HttpParams()
      .set('sport', sport);

    if (date) {
      params = params.set('date', date);
    }

    if (status) {
      params = params.set('status', status);
    }

    return this.http.get<FixturesResponse>(`${this.apiUrl}/v1/fixtures/`, { params });
  }

  getTeamSchedule(sport: SportKeys, slug: string, limit: number = 3): Observable<TeamScheduleResponse> {
    const params = new HttpParams()
      .set('sport', sport)
      .set('slug', slug)
      .set('limit', limit);

    return this.http.get<TeamScheduleResponse>(`${this.apiUrl}/widget/team/`, { params });
  }
}
