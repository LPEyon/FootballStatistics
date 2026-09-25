export interface Match {
  home: string;
  away: string;
  home_logo: string;
  away_logo: string;
  home_score: string | null;
  away_score: string | null;
  status: string;
  status_text: string;
  time: string;
  competition: string;
  competition_logo: string;
  url: string;
}

export interface MatchResponse {
  sport: string;
  count: number;
  matches: Match[];
  updated: string;
}

export interface FixturesResponse {
  sport: string;
  date: string;
  count: number;
  matches: Match[];
}

export interface TeamInfo {
  name: string;
  logo: string;
  slug: string;
  url: string;
}

export interface TeamScheduleResponse {
  sport: string;
  team: TeamInfo;
  count: number;
  matches: Match[];
  updated: string;
}

export interface StandingRow {
  pos: number;
  team: string;
  team_logo: string;
  team_slug: string;
  team_url: string;
  p: number;
  w: number;
  d: number;
  l: number;
  gf: number;
  ga: number;
  gd: number;
  pts: number;
  promo_color: string;
  promo_name: string;
}

export interface StandingTable {
  group: string;
  rows: StandingRow[];
}

export interface StandingsResponse {
  sport: string;
  competition: string;
  competition_logo: string;
  competition_slug: string;
  tables: StandingTable[];
}
