import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITeamMember } from '../../models/team.model.';
import { DashboardService } from '../../data-access/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-team-member',
  standalone: false,
  templateUrl: './create-team-member.component.html',
  styleUrl: './create-team-member.component.scss'
})
export class CreateTeamMemberComponent implements OnInit {

  newMemberForm!: FormGroup;
  newMemberData!: ITeamMember;

  constructor(
    private _dashboard: DashboardService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initNewMemberForm()
  }

  initNewMemberForm() {
    this.newMemberForm = this.fb.group({
      name: ["", Validators.required],
      status: ["", Validators.required],
      role: ["", Validators.required],
      email: ["", [Validators.required, Validators.minLength(11)]],
      teams: ["", Validators.required],
    });
  }

  createNewMember() {
    this.newMemberData = { ...this.newMemberForm.value };
    this.newMemberData.teams = this.newMemberForm.value.teams.split(',');
    this._dashboard.createNewMember(this.newMemberData);
    this.router.navigate(['/dashboard', 'home']);
  }
}
