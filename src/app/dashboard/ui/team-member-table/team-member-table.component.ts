import { Component, Input } from '@angular/core';
import { StatusesEnum, TeamsEnum } from '../../models/status.model';
import { ITeamMember } from '../../models/team.model.';

@Component({
  selector: 'app-team-member-table',
  standalone: false,
  templateUrl: './team-member-table.component.html',
  styleUrl: './team-member-table.component.scss'
})
export class TeamMemberTableComponent {

  @Input() teamMembers!: ITeamMember[];
  statuses = StatusesEnum;
  teams = TeamsEnum;

  currentPage = 1;
  itemsPerPage = 3;

  get totalPages(): number {
    return Math.ceil(this.teamMembers.length / this.itemsPerPage);
  }

  get totalPagesArray(): number[] {
    return Array(this.totalPages)
      .fill(0)
      .map((_, i) => i + 1);
  }

  get paginatedMembers() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.teamMembers.slice(start, start + this.itemsPerPage);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  deleteUser(user: any) {
    this.teamMembers = this.teamMembers.filter(u => u !== user);
    if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
  }

  editUser(user: any) {
    console.log('Edit user:', user);
  }
}
