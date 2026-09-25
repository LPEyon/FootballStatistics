import {Component, input } from '@angular/core';
import {IonCard, IonCardContent } from "@ionic/angular";
import { Match} from "../../../interfaces/sportscore.interfaces";

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss'],
  imports: [IonCard, IonCardContent],
})
export class MatchCardComponent  {
  readonly match = input.required<Match>();
}
