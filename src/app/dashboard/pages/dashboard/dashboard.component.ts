import { Component, inject } from '@angular/core';
import { DashboardService } from '../../data-access/dashboard.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  private _dashboard = inject(DashboardService);

  teamMembers$ = this._dashboard.getAllTeamMembers().pipe(
    tap((teamMembers) => { })
  )
}
