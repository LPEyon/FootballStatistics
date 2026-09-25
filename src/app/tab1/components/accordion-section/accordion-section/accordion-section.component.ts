import {Component, input} from '@angular/core';
import {IonAccordion, IonAccordionGroup, IonItem, IonLabel} from "@ionic/angular";

@Component({
  selector: 'app-accordion-section',
  templateUrl: './accordion-section.component.html',
  styleUrls: ['./accordion-section.component.scss'],
  imports: [IonAccordion, IonAccordionGroup, IonItem, IonLabel],
})

export class AccordionSectionComponent {
  title = input.required<string>();
  count = input<number>(0);
  isOpen = input<boolean>(false);
}
