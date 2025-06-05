import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ITeamMember } from '../models/team.model.';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url: string = 'json/TeamData.json';

  constructor(
    private http: HttpClient,
  ) { }

  getAllTeamMembers(): Observable<ITeamMember[]> {
    return this.getMembersFromStore() ?
      of(this.getMembersFromStore()) :
      this.http.get<ITeamMember[]>(this.url).pipe(
        tap((member) => {
          this.clearStorage();
          this.saveMembers(member);
        })
      );
  }

  createNewMember(teamMember: ITeamMember) {
    let members = this.getMembersFromStore();
    teamMember.id = String(Date.now());
    members = [teamMember, ...members];
    this.saveMembers(members);
  }

  getMembersFromStore(): ITeamMember[] {
    const data = localStorage.getItem('TEAM_MEMBER');
    return data ? JSON.parse(data) : [];
  }

  private saveMembers(member: ITeamMember[]): void {
    localStorage.setItem('TEAM_MEMBER', JSON.stringify(member));
  }

  private clearStorage(): void {
    localStorage.removeItem('TEAM_MEMBER');
  }
}
