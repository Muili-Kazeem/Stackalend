import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITeamMember } from '../../models/team.model.';
import { DashboardService } from '../../data-access/dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-team-member',
  standalone: false,
  templateUrl: './create-team-member.component.html',
  styleUrl: './create-team-member.component.scss'
})
export class CreateTeamMemberComponent implements OnInit {

  newMemberForm!: FormGroup;
  newMemberData!: ITeamMember;
  memberId!: string;

  constructor(
    private _dashboard: DashboardService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.initNewMemberForm();
    this.route.paramMap.subscribe(
      (param) => {
        this.memberId = param.get('id') as string;
        if (this.memberId) {
          this.getMember(this.memberId);
        }
      }
    )
  }

  getMember(id: string) {
    this._dashboard.getMember(id).subscribe(
      (member) => {
        this.newMemberData = member as ITeamMember;
        this.populateMemberForm(this.newMemberData);
      }
    );
  }

  populateMemberForm(member: ITeamMember) {
    this.newMemberForm = this.fb.group({
      name: [member.name, Validators.required],
      status: [member.status, Validators.required],
      role: [member.role, Validators.required],
      email: [member.email, [Validators.required, Validators.minLength(11)]],
      teams: [member.teams.join(', '), Validators.required],
    });
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
    console.log(this.newMemberData);

    if (this.newMemberData.id) {
      this._dashboard.updateUser(this.newMemberData);
      console.log("Updating");
    } else {
      this._dashboard.createNewMember(this.newMemberData);
      console.log("Saving");
    }
    this.router.navigate(['/dashboard', 'home']);
  }
}
