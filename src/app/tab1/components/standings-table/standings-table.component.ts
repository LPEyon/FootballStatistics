import {Component, input} from '@angular/core';
import {StandingsResponse} from "../../../interfaces/sportscore.interfaces";
import {IonImg} from "@ionic/angular";

@Component({
  selector: 'app-standings-table',
  templateUrl: './standings-table.component.html',
  styleUrls: ['./standings-table.component.scss'],
  imports: [
    IonImg
  ],
})
export class StandingsTableComponent {
  readonly standings = input.required<StandingsResponse>();
}
