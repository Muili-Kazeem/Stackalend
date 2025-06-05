import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MetricCardComponent } from './ui/metric-card/metric-card.component';
import { MdgCardComponent } from './ui/mdg-card/mdg-card.component';
import { RevenueContributionCardComponent } from './ui/revenue-contribution-card/revenue-contribution-card.component';
import { TeamMemberTableComponent } from './ui/team-member-table/team-member-table.component';
import { TagComponent } from './ui/tag/tag.component';
import { SharedModule } from '../shared/shared.module';
import { CreateTeamMemberComponent } from './pages/create-team-member/create-team-member.component';


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    MetricCardComponent,
    MdgCardComponent,
    RevenueContributionCardComponent,
    TeamMemberTableComponent,
    TagComponent,
    CreateTeamMemberComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
