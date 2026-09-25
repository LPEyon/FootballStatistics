import { Component } from '@angular/core';
import {IonCard, IonCardContent, IonSkeletonText, IonThumbnail} from "@ionic/angular";
import { MAX_PAGE_ITEM_COUNT } from "../../../../constants/shared.constants";

@Component({
  selector: 'app-match-card-skeleton',
  templateUrl: './match-card-skeleton.component.html',
  styleUrls: ['./match-card-skeleton.component.scss'],
  imports: [IonThumbnail, IonSkeletonText, IonCard, IonCardContent]
})
export class MatchCardSkeletonComponent {
  protected readonly skeletonItems = Array(MAX_PAGE_ITEM_COUNT);
}
