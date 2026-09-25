import { Component } from '@angular/core';
import {IonImg, IonSkeletonText, IonThumbnail} from "@ionic/angular";
import { MAX_PAGE_ITEM_COUNT } from "../../../../constants/shared.constants";

@Component({
  selector: 'app-standings-table-skeleton',
  templateUrl: './standings-table-skeleton.component.html',
  styleUrls: ['./standings-table-skeleton.component.scss'],
  imports: [IonSkeletonText, IonThumbnail, IonImg],
})
export class StandingsTableSkeletonComponent {
  protected readonly skeletonRows = Array(MAX_PAGE_ITEM_COUNT);
}
