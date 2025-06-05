import { Component, Input } from '@angular/core';
import { IStatData } from '../../models/team.model.';

@Component({
  selector: 'app-metric-card',
  standalone: false,
  templateUrl: './metric-card.component.html',
  styleUrl: './metric-card.component.scss'
})
export class MetricCardComponent {
  @Input() stat!: IStatData;

  calcPercentage(): number {
    return (this.stat.present_amount - this.stat.last_amount) / this.stat.last_amount
  }

  calcDifference(): number {
    return this.stat.present_amount - this.stat.last_amount
  }
}
