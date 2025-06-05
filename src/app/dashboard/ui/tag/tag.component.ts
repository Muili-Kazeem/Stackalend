import { Component, Input } from '@angular/core';
import { StatusesEnum, TeamsEnum } from '../../models/status.model';

@Component({
  selector: 'app-tag',
  standalone: false,
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {

  @Input() title!: string;
  statuses = StatusesEnum;
  teams = TeamsEnum;


  getTagClass(title: string) {
    switch (title.toLowerCase()) {
      case this.statuses.active:
        return 'bg-lendaActiveStatusBg text-lendaActiveStatusText';
      case this.statuses.inactive:
        return 'bg-lendaInactiveStatusBg text-lendaInactiveStatusText';
      case this.teams.design:
        return 'bg-lendaLightPurple text-lendaPurple';
      case this.teams.product:
        return 'bg-lendaLightBlue text-lendaBlue';
      case this.teams.marketing:
        return 'bg-lendaLightIndigo text-lendaIndigo';
      case this.teams.security:
        return 'bg-lendaLightRed text-lendaRed';
      default:
        return 'bg-lendaActiveStatusBg text-lendaActiveStatusText';
    }
  }
}
