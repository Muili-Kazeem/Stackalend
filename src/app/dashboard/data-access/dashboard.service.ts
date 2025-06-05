import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { ITeamMember } from '../models/team.model.';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  teamUrl = 'json/TeamData.json';
  statUrl = 'json/StatData.json';

  constructor(
    private http: HttpClient,
  ) { }

  getStatData(): Observable<[]> {
    return this.http.get<[]>(this.statUrl);
  }

  getAllTeamMembers(): Observable<ITeamMember[]> {
    return this.getMembersFromStore().length > 0 ?
      of(this.getMembersFromStore()) :
      this.http.get<ITeamMember[]>(this.teamUrl).pipe(
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

  deleteUser(id: string): void {
    this.getAllTeamMembers().pipe(
      map((users) => {
        return users.filter(user => user.id !== id);
      })
    ).subscribe(
      (users) => {
        this.saveMembers(users);
      }
    )
  }

  private saveMembers(member: ITeamMember[]): void {
    localStorage.setItem('TEAM_MEMBER', JSON.stringify(member));
  }

  private clearStorage(): void {
    localStorage.removeItem('TEAM_MEMBER');
  }
}
